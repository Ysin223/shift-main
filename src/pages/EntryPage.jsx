import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function EntryPage() {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const continueAsGuest = () => {
    updateUser({ isGuest: true, isAuthenticated: false });
    navigate('/home');
  };

  return (
    <main className="phone-shell onboarding-page entry-page page-enter">
      <Logo />
      <section className="entry-page__hero">
        <div className="entry-page__copy">
          <p className="eyebrow">GAMIFIED MOVEMENT FOR BUSY PEOPLE</p>
          <h1>Take 5.<br />Feel better.</h1>
          <p>Your thumbs are getting a workout, and not you?</p>
          <p className="entry-page__tease">How embarrassing.</p>
        </div>
        <Mascot pose="main" className="entry-page__mascot" />
      </section>
      <div className="entry-page__actions">
        <PrimaryButton onClick={() => navigate('/questionnaire/1')}>SIGN UP</PrimaryButton>
        <PrimaryButton variant="secondary" onClick={() => navigate('/login')}>LOG IN</PrimaryButton>
        <button className="text-link" onClick={continueAsGuest}>Do it later</button>
      </div>
    </main>
  );
}
