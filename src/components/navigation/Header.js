import './navigation.css';

import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <span>Cinema Guru</span>
      <nav className="nav">
        <img src="https://picsum.photos/100/100" alt="avatar of the person" />
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout}>
          <FontAwesomeIcon icon={faSignOut} /> Logout
        </span>
      </nav>
    </header>
  );
}

export default Header;
