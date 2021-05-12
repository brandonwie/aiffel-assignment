import { FC } from 'react';
import Logo from '../images/logo.png';
import Profile from '../images/profile.png';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

const Header: FC = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <header>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={Logo} alt='aiffel_logo' />
        </div>

        <div className='user-info-container'>
          <div className='welcome-msg-container'>
            Aiffel 포럼에 오신 것을 환영합니다.
          </div>
          <div className='user-img-container'>
            <img src={Profile} alt='profile_image' />
          </div>
          <div className='user-name-container'>
            {user?.username}
            <span>님</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
