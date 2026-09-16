export default function TitleScreen({ onStart, name, onNameChange }) {
  return (
    <section className="screen quiz-bg">
      <div className="card">
        <div className="rule" />
        <h1 className="headline">
          Find Your
          <br />
          Leading Man
        </h1>
        <p className="sub">
          Five questions. One destiny. Answer honestly — or don't, we're not the
          wedding police.
        </p>
        <div className="name-input-wrap">
          <input
            type="text"
            className="name-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            maxLength={40}
          />
        </div>
        <button className="btn-primary" onClick={onStart}>
          Begin the story
        </button>
      </div>
    </section>
  );
}
