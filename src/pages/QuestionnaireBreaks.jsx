import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import SpeechBubble from '../components/SpeechBubble.jsx';
import ProgressIndicator from '../components/ProgressIndicator.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import AnswerCard from '../components/AnswerCard.jsx';
import { useUser } from '../context/UserContext.jsx';

const answers = [
  ['◉', 'One break, barely'],
  ['☕', 'Two short breaks'],
  ['◷', 'A few free moments'],
  ['⇄', 'Random breaks only'],
  ['🫠', 'If I have free time, I waste it'],
  ['🌀', 'My day is pure chaos'],
];

export default function QuestionnaireBreaks() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [selected, setSelected] = useState(user.freeMomentsAnswer);

  const next = () => {
    updateUser({ freeMomentsAnswer: selected });
    navigate('/signup');
  };

  return (
    <main className="phone-shell questionnaire-page questionnaire-page--options page-enter">
      <Logo compact />
      <SpeechBubble compact>
        <strong>How many free moments<br />do you get in a day?</strong>
        <span>Not holidays. Not dreams.</span>
        <span>Tiny gaps where I can push a<br />5-minute SHIFT into your life.</span>
      </SpeechBubble>
      <Mascot pose="confident" className="questionnaire-mascot" alt="Confident SHIFT mascot" />
      <div className="answer-grid" role="radiogroup" aria-label="Free moments">
        {answers.map(([icon, label]) => (
          <AnswerCard key={label} icon={icon} label={label} selected={selected === label} onSelect={() => setSelected(label)} name="breaks" />
        ))}
      </div>
      <div className="questionnaire-page__footer questionnaire-page__footer--options">
        <ProgressIndicator activeStep={3} />
        <PrimaryButton disabled={!selected} onClick={next}>Sign up</PrimaryButton>
      </div>
    </main>
  );
}
