import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import SpeechBubble from '../components/SpeechBubble.jsx';
import Mascot from '../components/Mascot.jsx';
import ProgressIndicator from '../components/ProgressIndicator.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function SignupPage() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [form, setForm] = useState({ email: '', password: '', confirm: '', accepted: false });
  const [error, setError] = useState('');

  const change = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.email.includes('@')) return setError('Enter a valid email address.');
    if (form.password.length < 6) return setError('Use at least six characters for your password.');
    if (form.password !== form.confirm) return setError('The passwords do not match.');
    if (!form.accepted) return setError('Accept the terms to create your account.');
    updateUser({ isAuthenticated: true, isGuest: false });
    navigate('/home');
  };

  return (
    <main className="phone-shell questionnaire-page signup-page page-enter">
      <Logo compact />
      <SpeechBubble compact>
        <strong>Almost done.</strong>
        <span>Let’s save your progress before I forget everything.</span>
      </SpeechBubble>
      <div className="signup-layout">
        <Mascot pose="main" className="signup-layout__mascot" />
        <form className="form-stack signup-form" onSubmit={submit}>
          <label>Email<input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" /></label>
          <label>Password<input name="password" type="password" value={form.password} onChange={change} placeholder="At least 6 characters" /></label>
          <label>Confirm password<input name="confirm" type="password" value={form.confirm} onChange={change} placeholder="Repeat your password" /></label>
          <label className="checkbox-row"><input name="accepted" type="checkbox" checked={form.accepted} onChange={change} /><span>I accept the terms and privacy policy.</span></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <PrimaryButton type="submit">CREATE MY ACCOUNT</PrimaryButton>
        </form>
      </div>
      <div className="questionnaire-page__footer signup-page__footer">
        <button className="text-link" onClick={() => navigate('/login')}>Already have an account? Log in</button>
        <ProgressIndicator activeStep={4} />
      </div>
    </main>
  );
}
