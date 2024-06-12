import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PDFViewer from './pages/PDFViewer';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/view/:id" component={PDFViewer} />
            </Switch>
        </Router>
    );
}

export default App;
