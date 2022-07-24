import { useEffect, useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
  });

  return (
    <div className="App">
      <Authentication />
    </div>
  );
}

export default App;
