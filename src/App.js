import React from 'react';
import {Provider} from "react-redux"
import store from "./store"
import './App.css';
import Homepage from "./views/Homepage"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Homepage/>
    </div>
    </Provider>
  );
}

export default App;
