import { useState } from 'react';
import './auth.css';
import { API_URL } from '../../App';

// General Components
import Button from '../../components/general/Button';

// components
import Login from './Login';
import Register from './Register';
import axios from 'axios';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(false);

  const handleSubmit = (onSubmit) => {
    onSubmit.preventDefault();
    console.log(username, password);
    if (_switch) {
      axios
        .post(
          `${API_URL}/api/auth/login`,
          { username, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem('accessToken', data.accessToken);
          setUserUsername(username);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post(
          `${API_URL}/api/auth/register`,
          { username, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem('accessToken', data.accessToken);
          setUserUsername(username);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  };

  const onClickBtn = (event) => {
    const classes = event.target.className;
    if (classes.split(' ')[1] === 'btn-dark') {
      set_switch(!_switch);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="header-auth">
        <Button label={'button'} className={_switch ? ' btn-light' : 'btn-dark'} onClick={onClickBtn}>
          Sign In
        </Button>
        <Button label={'button'} className={!_switch ? ' btn-light' : 'btn-dark'} onClick={onClickBtn}>
          Sign Up
        </Button>
      </div>
      {_switch ? (
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
      ) : (
        <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
      )}
    </form>
  );
}

export default Authentication;
