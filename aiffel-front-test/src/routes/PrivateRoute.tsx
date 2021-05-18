import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ ...routeProps }) => {
  const { token } = localStorage;

  if (token) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={'/'} />;
  }
};

export default ProtectedRoute;
