import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useActions } from '../hooks';
import LoginForm from '../layout/LoginForm';
import { RootState } from '../state';
import { checkEmail, checkPassword } from '../utils/validation';

const Login = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  // login Action
  const { login } = useActions();
  const history = useHistory();
  // local state
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formState;
  // form validation
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //* validations
    if (event.target.name === 'email') {
      const isValidEmail = checkEmail(event.target.value);
      setIsEmail(isValidEmail ? true : false);
    } else {
      const isValidPassword = checkPassword(event.target.value);
      setIsPassword(isValidPassword ? true : false);
    }
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(email, password);
    history.push('/forum');
  };

  if (isAuthenticated) {
    return <Redirect to='/forum' />;
  }

  return (
    <div className='main-container'>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        isEmail={isEmail}
        isPassword={isPassword}
      />
    </div>
  );
};

export default Login;
