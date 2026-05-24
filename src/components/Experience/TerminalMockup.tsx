import React from "react";

const TerminalMockup: React.FC = () => (
  <div className="terminal" style={{ width: "100%" }}>
    <div className="terminal-bar">
      <span className="terminal-dot" style={{ background: "#ff5f57" }} />
      <span className="terminal-dot" style={{ background: "#febc2e" }} />
      <span className="terminal-dot" style={{ background: "#28c840" }} />
      <span style={{ marginLeft: 12, fontSize: 11, color: "var(--term-dim)", fontFamily: "var(--f-mono)", letterSpacing: "-0.01em" }}>
        ~/zetta/match-barcode — go run
      </span>
    </div>
    <div style={{ padding: "18px 22px 22px", fontSize: 12.5, lineHeight: 1.85, color: "var(--term-text)", fontFamily: "var(--f-mono)", letterSpacing: "-0.005em" }}>
      <div><span style={{ color: "var(--term-green)" }}>$</span> <span>go run main.go</span></div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] Match Barcode System v1.4.0</div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] Connected to MS SQL Server</div>
      <div style={{ color: "var(--term-dim)" }}>[INFO] Listening on :8080</div>
      <div style={{ height: 8 }} />
      <div>
        <span style={{ color: "var(--term-blue)" }}>GET </span>
        <span>/api/validate/SKU-7821</span>
        {"   "}
        <span style={{ color: "var(--term-green)" }}>200</span>
        {"  "}
        <span style={{ color: "var(--term-dim)" }}>12ms</span>
      </div>
      <div>
        <span style={{ color: "var(--term-orange)" }}>POST</span>
        <span> /api/scan/inbound     </span>
        <span style={{ color: "var(--term-green)" }}>200</span>
        {"   "}
        <span style={{ color: "var(--term-dim)" }}> 8ms</span>
      </div>
      <div>
        <span style={{ color: "var(--term-blue)" }}>GET </span>
        <span>/api/orders/pending   </span>
        <span style={{ color: "var(--term-green)" }}>200</span>
        {"  "}
        <span style={{ color: "var(--term-dim)" }}>45ms</span>
      </div>
      <div style={{ height: 10 }} />
      <div style={{ color: "var(--term-green)" }}>✓ 0 mismatches today</div>
      <div style={{ color: "var(--term-green)" }}>✓ inbound scan verified</div>
      <div style={{ color: "var(--term-green)" }}>✓ SKU match locked</div>
      <div style={{ height: 6 }} />
      <div>
        <span style={{ color: "var(--term-green)" }}>$</span>
        <span style={{ display: "inline-block", width: "0.55em", height: "1em", background: "var(--term-text)", verticalAlign: "-0.12em", marginLeft: 4, animation: "blink 1.05s steps(1) infinite" }} />
      </div>
    </div>
  </div>
);

export default TerminalMockup;
