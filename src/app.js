import './styles/style.scss';
import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setScrollPos } from './actions/styles';


import { test } from './data/data'

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    store.dispatch(setScrollPos(scrollTop));
    
})

