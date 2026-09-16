import { useEffect, useState } from "react";

export default function EnvelopeScreen({ onOpened }) {
  const [opened, setOpened] = useState(false);

  function handleClick() {
    if (opened) return;
    setOpened(true);
  }

  useEffect(() => {
    if (!opened) return;
    const t = setTimeout(() => {
      onOpened();
    }, 900);
    return () => clearTimeout(t);
  }, [opened, onOpened]);

  return (
    <section className="screen stage-bg">
      <div className="stage-label">Your story has an ending</div>
      <p className="stage-title">Something arrived for you.</p>
      <div
        className={`envelope-wrap${opened ? " opened" : ""}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Open the envelope"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div className="env-card" />
        <div className="env-body" />
        <div className="env-flap" />
        <div className="seal">S</div>
      </div>
      <p className={`hint${opened ? " hidden" : ""}`}>
        click the envelope to open it
      </p>
    </section>
  );
}
