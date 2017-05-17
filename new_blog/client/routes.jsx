import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute,
browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import Home from './components/Home.jsx';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

//TODO - pass in sagas

class Routes extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
            </Router>
        )
    }
}

export default Routes;
