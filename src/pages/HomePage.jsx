import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import BottomNavigation from '../components/BottomNavigation.jsx';
import ChallengeCard from '../components/ChallengeCard.jsx';
import Icon from '../components/Icon.jsx';
import { useUser } from '../context/UserContext.jsx';
import { exercises, alternativeChallenges } from '../data/challenges.js';

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const displayName = user.userName || (user.isGuest ? 'there' : 'Yassine');

  return (
    <main className="phone-shell app-page home-page page-enter">
      <header className="app-header">
        <button className="icon-button" aria-label="Open menu"><Icon name="menu" /></button>
        <Logo compact />
        <button className="icon-button icon-button--notification" aria-label="Notifications"><Icon name="bell" /><span /></button>
      </header>

      <section className="welcome-row">
        <div><h1>Hey {displayName} 👋</h1><p>Ready to earn your next badge?</p></div>
        <div className="streak-pill"><span>🔥</span><strong>{user.streak}</strong><small>day streak</small></div>
      </section>

      <section className="today-card">
        <div className="today-card__intro">
          <div>
            <p className="eyebrow">TODAY’S SHIFT</p>
            <h2>Desk Reset <span className="round-icon">♿</span></h2>
            <p className="today-card__meta"><Icon name="clock" size={18} /> 5 exercises <span>•</span> 5 minutes</p>
            <p>You’ve been sitting long enough.<br />Let’s undo some of that.</p>
          </div>
          <Mascot pose="stretching" className="today-card__mascot" alt="SHIFT mascot stretching" />
        </div>

        <ol className="exercise-list">
          {exercises.map((exercise, index) => (
            <li key={exercise.name}>
              <span className="exercise-list__number">{index + 1}</span>
              <span className="exercise-list__name">{exercise.name}</span>
              <span className="exercise-list__duration">{exercise.duration}</span>
              <span className="exercise-list__icon">{exercise.icon}</span>
            </li>
          ))}
        </ol>

        <div className="reward-panel">
          <strong>Complete this session to earn:</strong>
          <div className="reward-panel__items">
            <div><span>☆</span><p><strong>25</strong><br />SHIFT Points</p></div>
            <div><span>✪</span><p>Progress toward<br /><strong>Desk Escape</strong></p></div>
            <div><span>🔥</span><p><strong>Day 1</strong><br />streak</p></div>
          </div>
          <button className="start-button" onClick={() => navigate('/session')}>START THIS SHIFT <Icon name="arrow" size={20} /></button>
        </div>
      </section>

      <section className="more-section">
        <div className="section-heading">
          <div><h2>More challenges for you</h2><p>Not feeling Desk Reset? Pick another 5-minute SHIFT.</p></div>
          <Icon name="arrow" className="lime-icon" />
        </div>
        <div className="challenge-scroller">
          {alternativeChallenges.map((challenge) => <ChallengeCard key={challenge.title} challenge={challenge} />)}
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}
