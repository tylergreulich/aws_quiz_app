import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';
import QuestionFour from './components/QuestionFour';
import QuestionFive from './components/QuestionFive';
import Results from './components/ResultsPage';

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
      <Route exact path="/question-one" component={QuestionOne} />
      <Route exact path="/question-two" component={QuestionTwo} />
      <Route exact path="/question-three" component={QuestionThree} />
      <Route exact path="/question-four" component={QuestionFour} />
      <Route exact path="/question-five" component={QuestionFive} />
      <Route exact path="/results" component={Results} />
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
