import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute,
browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './components/Home.jsx';

const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(reducers);

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
