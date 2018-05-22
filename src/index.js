import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageOne from './components/PageOne';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from './store/reducers/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/page-one" component={PageOne} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
