"use client";

import { useEffect, useRef } from "react";

type TermageddonPolicyEmbedProps = {
  policyId: string;
  title?: string;
};

export default function TermageddonPolicyEmbed({
  policyId,
  title,
}: TermageddonPolicyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const policyUrl = `https://policies.termageddon.com/api/policy/${policyId}`;

  useEffect(() => {
    let isMounted = true;

    const loadPolicy = async () => {
      try {
        const response = await fetch(policyUrl);
        if (!response.ok) {
          console.error("Failed to load Termageddon policy:", response.status);
          return;
        }
        const html = await response.text();
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = html;
        }
      } catch (error) {
        console.error("Error loading Termageddon policy:", error);
      }
    };

    loadPolicy();

    return () => {
      isMounted = false;
    };
  }, [policyUrl]);

  return (
    <div>
      {title && (
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">
          {title}
        </h2>
      )}
      <div
        ref={containerRef}
        className="policy_embed_div"
        style={{ width: "100%", minHeight: 480 }}
      >
        Please wait while the policy is loaded. If it does not load, please{" "}
        <a rel="nofollow" href={policyUrl} target="_blank">
          click here
        </a>{" "}
        to view the policy.
      </div>
    </div>
  );
}

