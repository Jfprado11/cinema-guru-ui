import './auth.css';

import { faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

// general componets
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="Register-container">
      <h2>Create a new account</h2>
      <Input
        value={username}
        setValue={setUsername}
        className={'input-light'}
        icon={faUser}
        label={'Username:'}
        type={'text'}
        inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'username' }}
      />
      <Input
        value={password}
        setValue={setPassword}
        className={'input-light'}
        icon={faKey}
        label={'Password:'}
        type={'password'}
        inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'password' }}
      />
      <Button className={'btn-dark btn-res'} icon={faPlus} label={'submit'}>
        Sign Up
      </Button>
    </div>
  );
}

export default Register;
