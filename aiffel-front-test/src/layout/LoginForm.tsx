import { ReactElement } from 'react';
import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';

interface LoginFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  email: string;
  password: string;
  isEmail: boolean;
  isPassword: boolean;
}

const LoginForm: FC<LoginFormProps> = ({
  onChange,
  onSubmit,
  email,
  password,
  isEmail,
  isPassword,
}): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordType = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
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
