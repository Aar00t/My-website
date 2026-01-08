
"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "granted");
    setVisible(false);
    window.location.reload();
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "25px",
        padding: "16px",
        background: "#1F1F1F",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        maxWidth: "300px",
        zIndex: 9999,
      }}
    >
      <p style={{ margin: "0 0 12px 0", fontSize: "0.95rem", lineHeight: 1.4 }}>
        This site uses cookies for analytics. Allow?
      </p>

      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button
          onClick={accept}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Accept
        </button>


        <button
          onClick={reject}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            background: "#3A3A3A",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reject
        </button>

      </div>
    </div>
  );
}
