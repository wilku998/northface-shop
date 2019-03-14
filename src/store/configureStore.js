import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import stylesReducer from '../reducers/styles';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(stylesReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}




