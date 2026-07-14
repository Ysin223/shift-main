import BottomNavigation from '../components/BottomNavigation.jsx';
import Logo from '../components/Logo.jsx';
import ChallengeCard from '../components/ChallengeCard.jsx';
import { alternativeChallenges } from '../data/challenges.js';

export default function ChallengesPage() {
  return (
    <main className="phone-shell app-page simple-app-page page-enter">
      <Logo compact />
      <p className="eyebrow">EXPLORE</p>
      <h1>Challenges</h1>
      <p>Pick a five-minute SHIFT that matches your energy and your day.</p>
      <div className="stacked-challenges">
        {alternativeChallenges.map((challenge) => <ChallengeCard key={challenge.title} challenge={challenge} />)}
      </div>
      <BottomNavigation />
    </main>
  );
}
