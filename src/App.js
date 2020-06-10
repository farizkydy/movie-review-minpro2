import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import './App.css';
import Homepage from "./views/Homepage"
import DetailPageOverview from "./views/DetailPageOverview"
import LoginForm from "./components/LoginForm"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/overview" component={DetailPageOverview} exact/>
          <Route path="/login" component={LoginForm} exact/>
          <Route component={()=> "404 not found"}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
