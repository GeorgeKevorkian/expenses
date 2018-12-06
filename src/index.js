import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import IndexRouter from './routers/IndexRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <IndexRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
