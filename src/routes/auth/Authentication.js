import { useState } from 'react';
import './auth.css';

// General Components
import Button from '../../components/general/Button';

// components
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(false);

  const onClickBtn = (event) => {
    const classes = event.target.className;
    console.log(classes.split());
    if (classes.split(' ')[1] === 'btn-dark') {
      set_switch(!_switch);
    }
  };

  return (
    <form className="form">
      <div className="header-auth">
        <Button label={'button'} className={_switch ? ' btn-light' : 'btn-dark'} onClick={onClickBtn}>
          Sign In
        </Button>
        <Button label={'button'} className={!_switch ? ' btn-light' : 'btn-dark'} onClick={onClickBtn}>
          Sign Up
        </Button>
      </div>
      {_switch ? <Login /> : <Register />}
    </form>
  );
}

export default Authentication;
