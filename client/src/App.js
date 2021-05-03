import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link} from  "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "./components/table";
import View from "./components/view";

import axios from "axios";

import Cards from "./components/card";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


function App() {
  const [data, setData] = React.useState(null);


  
  const markets = ["fb", "amzn"]

  

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
    <div className="App">
      
      
    </div>
    <Cards></Cards>
    <Route path="/" exact>
      <Table></Table>
     </Route>
    
    <Route path="/view">
      <View></View>
     </Route>
    </Router>
  );
}

export default App;