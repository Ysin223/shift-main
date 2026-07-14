import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import SpeechBubble from '../components/SpeechBubble.jsx';
import ProgressIndicator from '../components/ProgressIndicator.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function QuestionnaireName() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user.userName);

  const next = () => {
    updateUser({ userName: name.trim() });
    navigate('/questionnaire/2');
  };

  return (
    <main className="phone-shell questionnaire-page page-enter">
      <Logo compact />
      <SpeechBubble>
        <strong>Anyways, enough about me. Tell me more about yourself.</strong>
        <strong>What do we call you?</strong>
      </SpeechBubble>
      <div className="name-stage">
        <label className="name-input">
          <span className="sr-only">Your name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoFocus />
          <span aria-hidden="true">✎</span>
        </label>
        <Mascot pose="hanging" className="name-stage__mascot" alt="SHIFT mascot hanging from the name field" />
      </div>
      <div className="questionnaire-page__footer">
        <ProgressIndicator activeStep={1} />
        <PrimaryButton disabled={!name.trim()} onClick={next}>LET’S FIX THAT <span>→</span></PrimaryButton>
      </div>
    </main>
  );
}
