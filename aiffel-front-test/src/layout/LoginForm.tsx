import {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import Button from '../components/Button';
import Input from '../components/Input';
import { useSelector } from 'react-redux';
import { checkEmail, checkPassword } from './LoginForm-helper';
import { RootState } from '../state';

const LoginForm: FC = (): JSX.Element => {
  // Hooks
  const { login } = useActions();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn === true) {
      history.push('/forum');
    }
  }, [isLoggedIn, history]);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const { email, password } = formState;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //* validations
    if (event.target.name === 'email') {
      const validEmail = checkEmail(event.target.value);
      if (!validEmail) {
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    } else {
      const validPassword = checkPassword(event.target.value);
      if (!validPassword) {
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    }
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handlePasswordType = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className='login-outer-container'>
      <h2>😺 AIFFEL 아이펠 포럼</h2>
      <div className='login-inner-container'>
        <form onSubmit={onSubmit} noValidate>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='이메일을 입력하세요.'
            value={email}
            onChange={onChange}
            required
          />
          <div className={isEmail ? 'div-error invisible' : 'div-error'}>
            이메일을 다시 확인해주세요.
          </div>

          <Input
            type={showPassword ? 'password' : 'text'}
            id='password'
            name='password'
            placeholder='비밀번호를 입력하세요.'
            value={password}
            onChange={onChange}
            required
          />
          <span className='show-hide' onClick={handlePasswordType}>
            {showPassword ? 'hide' : 'show'}
          </span>
          <span className={isPassword ? 'div-error invisible' : 'div-error'}>
            비밀번호는 10자리 이상이어야 합니다.
          </span>

          <Button className='button-submit' type='submit'>
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
