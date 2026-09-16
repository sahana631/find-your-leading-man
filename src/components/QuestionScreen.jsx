import { questions } from "../data/questions";

export default function QuestionScreen({ questionIndex, onSelect }) {
  const q = questions[questionIndex];

  return (
    <section className="screen quiz-bg">
      <div className="chapter-label">
        Chapter {questionIndex + 1} of {questions.length}
      </div>
      <div className="card">
        <p className="question">{q.text}</p>
        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className="ticket"
              onClick={() => onSelect(i)}
            >
              <span className="num">{i + 1}</span>
              {opt.label}
            </button>
          ))}
        </div>
        <div className="dots">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`dot${i <= questionIndex ? " filled" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
