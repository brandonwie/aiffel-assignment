import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
//Images
import Logo from '../images/logo.png';
import Profile from '../images/profile.png';
//Hooks
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import { useActions } from '../hooks/useActions';

const Header: FC = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.user);
  const { logout } = useActions();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <header>
      <div className='header-container'>
        <div className='logo-container'>
          <Link to='/forum'>
            <img src={Logo} alt='aiffel_logo' />
          </Link>
        </div>

        <div className='user-info-container'>
          <div className='welcome-msg-container'>
            Aiffel 포럼에 오신 것을 환영합니다.
          </div>
          <Link to='/profile' className='profile-link'>
            <div className='user-img-container'>
              <img src={Profile} alt='profile_image' />
            </div>
            <div className='user-name-container'>
              {user?.username}
              <span>님</span>
            </div>
          </Link>
          <Button type='button' className='button-logout' onClick={onClick}>
            로그아웃
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
