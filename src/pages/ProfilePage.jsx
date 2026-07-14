import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation.jsx';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, resetUser } = useUser();
  const reset = () => {
    resetUser();
    navigate('/');
  };
  return (
    <main className="phone-shell app-page simple-app-page profile-page page-enter">
      <Logo compact />
      <Mascot pose="main" className="profile-mascot" />
      <h1>{user.userName || 'Guest profile'}</h1>
      <p>{user.isAuthenticated ? 'Account active' : 'Exploring SHIFT as a guest'}</p>
      <div className="profile-stats">
        <div><strong>{user.streak}</strong><span>day streak</span></div>
        <div><strong>{user.shiftPoints}</strong><span>points</span></div>
        <div><strong>{user.routineAnswer ? '1' : '0'}</strong><span>profile answers</span></div>
      </div>
      <div className="profile-answer"><span>Routine</span><strong>{user.routineAnswer || 'Not selected'}</strong></div>
      <div className="profile-answer"><span>Free moments</span><strong>{user.freeMomentsAnswer || 'Not selected'}</strong></div>
      <PrimaryButton variant="danger" onClick={reset}>RESET PROTOTYPE</PrimaryButton>
      <BottomNavigation />
    </main>
  );
}
