import { NavLink } from 'react-router-dom';
import Icon from './Icon.jsx';

const items = [
  { to: '/home', label: 'Home', icon: 'home' },
  { to: '/challenges', label: 'Challenges', icon: 'trophy' },
  { to: '/session', label: 'Start SHIFT', special: true },
  { to: '/rewards', label: 'Rewards', icon: 'star' },
  { to: '/profile', label: 'Profile', icon: 'user' },
];

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''} ${item.special ? 'bottom-nav__item--special' : ''}`}>
          {item.special ? <span className="bottom-nav__shift">S</span> : <Icon name={item.icon} size={24} />}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
