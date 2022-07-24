import './auth.css';

// font icons
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

// general componets
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="Login-container">
      <h2>Sign in with your account</h2>
      <Input
        label={'Username:'}
        type={'text'}
        className={'input-light'}
        icon={faUser}
        inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'username' }}
      />
      <Input
        label={'Password:'}
        type={'password'}
        className={'input-light'}
        icon={faKey}
        inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'password' }}
      />
      <Button className={'btn-log btn-dark'} icon={faKey}>Sign In</Button>
    </div>
  );
}

export default Login;
