import { Navigate, Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuestionnaireName from './pages/QuestionnaireName.jsx';
import QuestionnaireRoutine from './pages/QuestionnaireRoutine.jsx';
import QuestionnaireBreaks from './pages/QuestionnaireBreaks.jsx';
import SignupPage from './pages/SignupPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ChallengesPage from './pages/ChallengesPage.jsx';
import SessionPage from './pages/SessionPage.jsx';
import RewardsPage from './pages/RewardsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/questionnaire/1" element={<QuestionnaireName />} />
      <Route path="/questionnaire/2" element={<QuestionnaireRoutine />} />
      <Route path="/questionnaire/3" element={<QuestionnaireBreaks />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="/session" element={<SessionPage />} />
      <Route path="/rewards" element={<RewardsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
