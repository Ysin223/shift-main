export default function AnswerCard({ icon, label, selected, onSelect, name }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={`answer-card ${selected ? 'answer-card--selected' : ''}`}
      onClick={onSelect}
      name={name}
    >
      <span className="answer-card__icon" aria-hidden="true">{icon}</span>
      <span className="answer-card__label">{label}</span>
      {selected && <span className="answer-card__check" aria-hidden="true">✓</span>}
    </button>
  );
}
