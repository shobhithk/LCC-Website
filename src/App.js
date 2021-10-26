//Basic react imports
import React from "react";

//Router for react
import { BrowserRouter as Router, Route } from "react-router-dom";

//Bootstrap imports
//Importing Components
import Header from "./components/Header";
import Home from './screens/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
    </Router>
  );
};

export default App;
