import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import stylesReducer from '../reducers/styles';
import shoppingReducer from '../reducers/shopping';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        styles: stylesReducer,
        shopping: shoppingReducer
    }), composeEnhancers(applyMiddleware(thunk)))
    return store
}




