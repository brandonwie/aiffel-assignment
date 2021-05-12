import ReactDOM from 'react-dom';
import App from './App';
import { store } from './state';
import { Provider } from 'react-redux';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
