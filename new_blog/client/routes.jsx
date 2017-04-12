import React from 'react';
import { Router, Route, Link, IndexRoute,
browserHistory } from 'react-router';
import Home from './components/Home.jsx';

class Routes extends React.Component {

    render() {
        console.log('stuff');
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
            </Router>
        )
    }
}

export default Routes;
