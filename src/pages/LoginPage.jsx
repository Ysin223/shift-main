import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import Mascot from '../components/Mascot.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim() || password.length < 4) {
      setError('Enter an email and a password of at least four characters.');
      return;
    }
    updateUser({ isAuthenticated: true, isGuest: false });
    navigate('/home');
  };

  const guest = () => {
    updateUser({ isGuest: true, isAuthenticated: false });
    navigate('/home');
  };

  return (
    <main className="phone-shell auth-page page-enter">
      <Logo />
      <Mascot pose="main" className="auth-page__mascot" />
      <div className="auth-card">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Ready for your next SHIFT?</h1>
        <form onSubmit={submit} className="form-stack">
          <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
          <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></label>
          <button type="button" className="text-link text-link--right">Forgot password?</button>
          {error && <p className="form-error" role="alert">{error}</p>}
          <PrimaryButton type="submit">LOG IN</PrimaryButton>
        </form>
        <button className="text-link" onClick={() => navigate('/questionnaire/1')}>New here? Sign up</button>
        <button className="text-link" onClick={guest}>Continue as guest</button>
      </div>
    </main>
  );
}
