//Basic react imports
import React from "react";
import graph from './images/graph.png'


//Router for react
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog";

//Bootstrap imports
//Importing Components
import Header from "./components/Header";
import Home from "./screens/Home";

const blogData = {
  date: new Date().getFullYear(),
  author: "S",
  title: "Lorem Ipsum Lorem Ipsume Lorem Ipsum",
  imageName: graph,
  description:
    "Lorem Ipsum Lorem Ipsume Lorem Ipsum Lorem Ipsum Lorem Ipsume Lorem IpsumLorem Ipsum ",
};

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/blogs">
        <Blog blogData={blogData}/>
      </Route>
    </Router>
  );
};

export default App;
