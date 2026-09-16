import { useRef, useState } from "react";
import { faqs } from "../data/faqs";

function FaqItem({ q, a, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button className="faq-q" aria-expanded={isOpen} onClick={onToggle}>
        <span>{q}</span>
        <span className="plus">+</span>
      </button>
      <div
        className="faq-a"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 200}px` : "0px",
        }}
      >
        <p ref={contentRef}>{a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ husbandName }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {faqs.map((f, i) => (
        <FaqItem
          key={i}
          q={f.q}
          a={f.a.split("{H}").join(husbandName)}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
