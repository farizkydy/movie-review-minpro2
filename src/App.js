// import React from 'react';
// import logo from './logo.svg';
// import { Provider } from "react-redux";
// import store from "./store";
// import './App.css';
// import LoginForm from './components/Loginform';
// import ReviewComponents from './layouts/ReviewComponents';


// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <LoginForm />
//         {/* <ReviewComponents /> */}
//       </div>
//     </Provider>
//   );
// }

// export default App;
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import Routes from './routes/Route';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;



