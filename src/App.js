import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";
import { Provider } from 'react-redux';
import configureStore from '../src/redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Greeting/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;