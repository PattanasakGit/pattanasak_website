import React from "react";

const TerminalMockup: React.FC = () => (
  <div className="terminal" style={{ width: "100%" }}>
    <div className="terminal-bar">
      <span className="terminal-dot" style={{ background: "#ff5f57" }} />
      <span className="terminal-dot" style={{ background: "#febc2e" }} />
      <span className="terminal-dot" style={{ background: "#28c840" }} />
      <span style={{ marginLeft: 12, fontSize: 11, color: "var(--term-dim)", fontFamily: "var(--f-mono)", letterSpacing: "-0.01em" }}>
        ~/zetta/inventory-pos — ts-node
      </span>
    </div>
    <div style={{ padding: "18px 22px 22px", fontSize: 12.5, lineHeight: 1.85, color: "var(--term-text)", fontFamily: "var(--f-mono)", letterSpacing: "-0.005em" }}>
      <div><span style={{ color: "var(--term-green)" }}>$</span> <span>npx ts-node src/server.ts</span></div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] POS API Server v2.1.0</div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] TypeScript compiled — 0 errors</div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] Listening on :3001</div>
      <div style={{ height: 8 }} />
      <div>
        <span style={{ color: "var(--term-blue)" }}>GET </span>
        <span>/api/products/SKU-7821</span>
        {"  "}
        <span style={{ color: "var(--term-green)" }}>200</span>
        {"  "}
        <span style={{ color: "var(--term-dim)" }}>12ms</span>
      </div>
      <div>
        <span style={{ color: "var(--term-orange)" }}>POST</span>
        <span> /api/orders/create    </span>
        <span style={{ color: "var(--term-green)" }}>201</span>
        {"   "}
        <span style={{ color: "var(--term-dim)" }}> 9ms</span>
      </div>
      <div>
        <span style={{ color: "var(--term-blue)" }}>GET </span>
        <span>/api/branches/stock   </span>
        <span style={{ color: "var(--term-green)" }}>200</span>
        {"  "}
        <span style={{ color: "var(--term-dim)" }}>38ms</span>
      </div>
      <div style={{ height: 10 }} />
      <div style={{ color: "var(--term-green)" }}>✓ 0 type errors</div>
      <div style={{ color: "var(--term-green)" }}>✓ 70 branches connected</div>
      <div style={{ color: "var(--term-green)" }}>✓ stock sync verified</div>
      <div style={{ height: 6 }} />
      <div>
        <span style={{ color: "var(--term-green)" }}>$</span>
        <span style={{ display: "inline-block", width: "0.55em", height: "1em", background: "var(--term-text)", verticalAlign: "-0.12em", marginLeft: 4, animation: "blink 1.05s steps(1) infinite" }} />
      </div>
    </div>
  </div>
);

export default TerminalMockup;
