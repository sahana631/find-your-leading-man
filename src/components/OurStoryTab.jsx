export default function OurStoryTab({ timeline }) {
  return (
    <div className="site-panel" data-panel="story">
      <p className="panel-lede">
        Every choice you made along the way became part of this. Here's how
        it actually happened.
      </p>
      <ul className="timeline">
        {timeline.map((entry, i) => (
          <li key={i}>
            <p className="timeline-title">{entry.title}</p>
            <p className="timeline-copy">{entry.copy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
