export default function SaveTheDateTab({ venue }) {
  return (
    <div className="site-panel" data-panel="date">
      <p className="panel-lede">
        Together with absolutely no one's permission, they're getting
        married. You're the reason.
      </p>
      <ul className="timeline">
        <li>
          <p className="timeline-title">the date</p>
          <p className="timeline-copy">
            Saturday, June 14 — ceremony at six, reception to follow until
            someone loses a shoe.
          </p>
        </li>
        <li>
          <p className="timeline-title">the place</p>
          <p className="timeline-copy">
            {venue}. Bring a coat for the walk in, you won't need it once
            you're inside.
          </p>
        </li>
        <li>
          <p className="timeline-title">the ask</p>
          <p className="timeline-copy">
            Formal invitation with all the real details to follow. For now:
            clear your calendar and start practicing your toast face.
          </p>
        </li>
      </ul>
    </div>
  );
}
