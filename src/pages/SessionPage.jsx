import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import BottomNavigation from '../components/BottomNavigation.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function SessionPage() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [paused, setPaused] = useState(false);

  const complete = () => {
    updateUser({ shiftPoints: user.shiftPoints + 25, streak: Math.max(1, user.streak) });
    navigate('/rewards');
  };

  return (
    <main className="phone-shell app-page session-page page-enter">
      <Logo compact />
      <p className="eyebrow">EXERCISE 2 OF 5</p>
      <h1>Neck stretches</h1>
      <div className="session-timer">00:45</div>
      <Mascot pose="stretching" className="session-mascot" />
      <p className="session-instruction">Tilt your head gently toward one shoulder. Keep your shoulders relaxed and breathe slowly.</p>
      <div className="session-progress"><span style={{ width: '40%' }} /></div>
      <div className="session-actions">
        <PrimaryButton variant="secondary" onClick={() => setPaused((value) => !value)}>{paused ? 'RESUME' : 'PAUSE'}</PrimaryButton>
        <PrimaryButton onClick={complete}>COMPLETE DEMO</PrimaryButton>
      </div>
      <BottomNavigation />
    </main>
  );
}
