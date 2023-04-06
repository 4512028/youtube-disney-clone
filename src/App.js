import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";
// import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
