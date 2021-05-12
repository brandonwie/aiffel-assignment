import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './state';

import Main from './pages/Main';
import Forum from './pages/Forum';
import PostDetailPage from './pages/PostDetailPage';
import Header from './components/Header';

const App: FC = (): JSX.Element => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <>
      {isLoggedIn ? <Header /> : null}
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/forum' component={Forum} />
          <Route path='/forum/:id' component={PostDetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
