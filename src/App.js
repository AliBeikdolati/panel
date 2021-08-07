import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import components

import Navbar from './components/Navbar'
import GuardedRoute from './components/GuardedRoute'
import AdminPage from "./views/AdminPage";
import CustomPage from './views/CustomPage'


import './App.css';


function App() {
    const [isAutheticated, setisAutheticated] = useState(false);

    function login() {
        setisAutheticated(true);
        console.log("loggedInUser:" + isAutheticated)
    }

    function logout() {
        setisAutheticated(false);
        console.log("loggedInUser:" + isAutheticated)
    }

    return (
        <Router>
            <div className="App">
                <Navbar login={login} logout={logout}/>
                <div className="main">
                    <Switch>
                        <Route exact path='/' component={CustomPage}/>
                        <GuardedRoute path='/admin' component={AdminPage} auth={isAutheticated} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
