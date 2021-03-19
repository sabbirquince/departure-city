import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SetDestination from "./SetDestination/SetDestination";
import Login from "./Login/Login";
import Overview from "./Overview/Overview";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Header />
          </Route>

          <Route path="/home">
            <Header />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/vehicle/:vehicle">
            <SetDestination />
          </PrivateRoute>

          <PrivateRoute path="/overview">
            <Overview />
          </PrivateRoute>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
