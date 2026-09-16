import { useEffect, useRef, useState } from "react";
import SaveTheDateTab from "./SaveTheDateTab";
import OurStoryTab from "./OurStoryTab";
import FaqAccordion from "./FaqAccordion";

const TABS = [
  { id: "date", label: "Save the Date" },
  { id: "story", label: "Our Story" },
  { id: "faq", label: "FAQ" },
];

export default function WeddingSiteScreen({
  outcome,
  storyTimeline,
  playerName,
  onRestart,
}) {
  const [activeTab, setActiveTab] = useState("date");
  const [show, setShow] = useState(false);
  const siteWrapRef = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  function handleTabClick(id) {
    setActiveTab(id);
    if (siteWrapRef.current) siteWrapRef.current.scrollTop = 0;
  }

  return (
    <section className="screen stage-bg">
      <div
        className={`site-wrap${show ? " show" : ""}`}
        ref={siteWrapRef}
      >
        <div className="site-hero">
          <div className="invite-eyebrow">save the date</div>
          <p className="invite-names">{playerName}</p>
          <p className="invite-and">&amp;</p>
          <p className="invite-names">{outcome.name}</p>
          <p className="invite-details">
            <span>{outcome.venue}</span>
            <span className="label">June 14 — six o'clock in the evening</span>
          </p>
        </div>

        <div className="site-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`site-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "date" && <SaveTheDateTab venue={outcome.venue} />}
        {activeTab === "story" && <OurStoryTab timeline={storyTimeline} />}
        {activeTab === "faq" && (
          <div className="site-panel" data-panel="faq">
            <FaqAccordion husbandName={outcome.name} />
          </div>
        )}

        <div className="site-footer">
          <button className="btn-ghost dark" onClick={onRestart}>
            Play again
          </button>
        </div>
      </div>
    </section>
  );
}
