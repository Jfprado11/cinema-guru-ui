import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

export const API_URL = 'http://localhost:8000';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .post(
        `${API_URL}/api/auth/`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div className={`App ${!isLoggedIn && 'center-auth'}`}>
      {!isLoggedIn ? (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      ) : (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
