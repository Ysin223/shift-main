import BottomNavigation from '../components/BottomNavigation.jsx';
import Logo from '../components/Logo.jsx';
import { useUser } from '../context/UserContext.jsx';

const badges = [
  ['First SHIFT', 'Complete your first five-minute session.', '✓'],
  ['Desk Escape', 'Complete five desk movement sessions.', '3/5'],
  ['Scroll Breaker', 'Replace seven scrolling breaks with movement.', '2/7'],
];

export default function RewardsPage() {
  const { user } = useUser();
  return (
    <main className="phone-shell app-page simple-app-page page-enter">
      <Logo compact />
      <p className="eyebrow">YOUR PROGRESS</p>
      <h1>Badges & Rewards</h1>
      <div className="points-card"><span>SHIFT Points</span><strong>{user.shiftPoints}</strong><p>Keep moving to unlock partner rewards.</p></div>
      <section className="badge-list">
        {badges.map(([title, text, progress], index) => (
          <article key={title} className={index === 0 ? 'badge-card badge-card--earned' : 'badge-card'}>
            <span className="badge-card__icon">★</span>
            <div><h2>{title}</h2><p>{text}</p></div>
            <strong>{progress}</strong>
          </article>
        ))}
      </section>
      <section className="redeem-card"><p className="eyebrow">NEXT REWARD</p><h2>15% sportswear discount</h2><p>Unlock after completing the Scroll Breaker challenge.</p><button disabled>LOCKED</button></section>
      <BottomNavigation />
    </main>
  );
}
