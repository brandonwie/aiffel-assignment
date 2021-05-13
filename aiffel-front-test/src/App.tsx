import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Pages
import Header from './components/Header';
import Main from './pages/Main';
import Forum from './pages/Forum';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
//Hooks
import { useActions } from './hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from './state';

const App: FC = (): JSX.Element => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const { loadUser, logout } = useActions();

  useEffect(() => {
    const { token } = localStorage;
    if (token) {
      // to set auth token to header
      // yet, there's no api method discussed
      loadUser(token);
    }

    // if there's no token, log out user
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        logout();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        {isAuthenticated ? <Header /> : null}
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/forum' component={Forum} />
          <Route path='/forum/:id' component={PostDetail} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
