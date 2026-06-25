import React, { useState } from "react";
import { useParameter } from "storybook/manager-api";
import { AddonPanel, SyntaxHighlighter } from "storybook/internal/components";
// Type-only — erased at build time, so no runtime/alias resolution needed here.
import type { UnlayerHandoff } from "../src/unlayer/render";

const PARAM_KEY = "unlayer";

const TABS = [
  ["preview", "Preview"],
  ["tsx", "Elements TSX"],
  ["html", "HTML"],
  ["json", "Design JSON"],
] as const;
type TabId = (typeof TABS)[number][0];

// Syntax highlighting is O(n) and very slow on large strings — it's what made
// the panel hang. Only highlight small payloads (the TSX); show big machine
// output (HTML/JSON) in a fast, copyable textarea.
const HIGHLIGHT_MAX = 30_000;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      style={{
        position: "absolute", top: 8, right: 8, zIndex: 2,
        padding: "4px 12px", fontSize: 12, cursor: "pointer",
        borderRadius: 4, border: "1px solid rgba(0,0,0,.2)", background: "#fff",
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function CodeView({ value, language }: { value: string; language: string }) {
  if (value.length <= HIGHLIGHT_MAX) {
    return (
      <SyntaxHighlighter language={language} copyable bordered style={{ height: "100%", margin: 0, overflow: "auto" }}>
        {value}
      </SyntaxHighlighter>
    );
  }
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <CopyButton text={value} />
      <textarea
        readOnly
        value={value}
        spellCheck={false}
        onFocus={(e) => e.currentTarget.select()}
        style={{
          width: "100%", height: "100%", boxSizing: "border-box", border: 0,
          padding: "12px 12px 12px 12px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12, lineHeight: 1.5, whiteSpace: "pre", overflow: "auto", resize: "none", outline: "none",
        }}
      />
    </div>
  );
}

export function UnlayerPanel({ active }: { active: boolean }) {
  const data = useParameter<UnlayerHandoff | null>(PARAM_KEY, null);
  const [tab, setTab] = useState<TabId>("preview");

  if (!active) return null;

  return (
    <AddonPanel active={active}>
      {!data ? (
        <div style={{ padding: 16, lineHeight: 1.6 }}>
          No Unlayer output for this story. Wire it in the story file with{" "}
          <code>parameters.unlayer = unlayerHandoffSafe(() =&gt; XUnlayer(args), source)</code>.
        </div>
      ) : data.error ? (
        <div style={{ padding: 16, lineHeight: 1.6 }}>
          <strong>Unlayer render failed for this story.</strong> The story's main preview is unaffected.
          <pre style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{data.error}</pre>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ display: "flex", gap: 4, padding: "6px 8px", borderBottom: "1px solid rgba(0,0,0,.1)", flex: "0 0 auto" }}>
            {TABS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  padding: "4px 12px", fontSize: 12, cursor: "pointer", borderRadius: 4,
                  border: "1px solid transparent",
                  background: tab === id ? "rgba(0,0,0,.08)" : "transparent",
                  fontWeight: tab === id ? 700 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div style={{ flex: "1 1 auto", minHeight: 0, overflow: "hidden" }}>
            {tab === "preview" && (
              <iframe title="Unlayer email preview" srcDoc={data.html} style={{ width: "100%", height: "100%", border: 0, background: "#eceff3" }} />
            )}
            {tab === "tsx" && <CodeView value={data.tsx} language="tsx" />}
            {tab === "html" && <CodeView value={data.html} language="html" />}
            {tab === "json" && <CodeView value={data.json} language="json" />}
          </div>
        </div>
      )}
    </AddonPanel>
  );
}
