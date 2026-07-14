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
  ['😴', 'Mostly sleeping.'],
  ['📱', 'TikTok counts as a break.'],
  ['👟', 'Always doing, never moving.'],
  ['🔋', 'I collapse after work.'],
  ['⚡', 'I move when life forces me.'],
  ['💭', 'I try… then forget.'],
];

export default function QuestionnaireRoutine() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [selected, setSelected] = useState(user.routineAnswer);

  const next = () => {
    updateUser({ routineAnswer: selected });
    navigate('/questionnaire/3');
  };

  return (
    <main className="phone-shell questionnaire-page questionnaire-page--options page-enter">
      <Logo compact />
      <SpeechBubble compact>
        <strong>What do you actually do all day?</strong>
        <span>And don’t say “emails” like that counts as cardio.</span>
        <span>I mean your real routine:<br />sitting, scrolling, pretending to stretch?</span>
        <strong>Tell me!</strong>
      </SpeechBubble>
      <Mascot pose="thinking" className="questionnaire-mascot questionnaire-mascot--thinking" alt="SHIFT mascot thinking" />
      <div className="answer-grid" role="radiogroup" aria-label="Daily routine">
        {answers.map(([icon, label]) => (
          <AnswerCard key={label} icon={icon} label={label} selected={selected === label} onSelect={() => setSelected(label)} name="routine" />
        ))}
      </div>
      <div className="questionnaire-page__footer questionnaire-page__footer--options">
        <ProgressIndicator activeStep={2} />
        <PrimaryButton disabled={!selected} onClick={next}>LET’S FIX THAT <span>→</span></PrimaryButton>
      </div>
    </main>
  );
}
