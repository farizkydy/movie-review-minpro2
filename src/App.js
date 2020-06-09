import React from 'react';
import {Provider} from "react-redux"
import store from "./store"
import './App.css';
import Homepage from "./views/Homepage"
import DetailPageOverview from "./views/DetailPageOverview"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Homepage/>
      <DetailPageOverview/>
    </div>
    </Provider>
  );
}

export default App;
