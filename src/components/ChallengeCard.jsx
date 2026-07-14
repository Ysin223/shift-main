import Mascot from './Mascot.jsx';

export default function ChallengeCard({ challenge }) {
  return (
    <article className={`challenge-card ${challenge.className}`}>
      <div className="challenge-card__copy">
        <h3>{challenge.title}</h3>
        <p className="challenge-card__meta">{challenge.meta}</p>
        <p>{challenge.description}</p>
        <span className="challenge-card__reward">Earn {challenge.points} 🔥</span>
      </div>
      <Mascot pose={challenge.asset} className="challenge-card__mascot" alt={`${challenge.title} mascot`} />
    </article>
  );
}
