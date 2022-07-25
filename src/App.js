import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';

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
    <div className="App">
      {!isLoggedIn ? (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      ) : (
        <h2>hola {userUsername}</h2>
      )}
    </div>
  );
}

export default App;
