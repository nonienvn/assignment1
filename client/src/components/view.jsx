import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import axios from "axios";

function View() {
   const [datas, setDatas] = useState ([{
       name: "",
       symbol: "",
       price: ""
   }])

   useEffect(() => {
      fetch('/datas').then (res => {
          if(res.ok) {
              return res.json()
          }
      }). then (jsonRes => setDatas(jsonRes))
   })
    return <div classname = "conatiner">
      <h1>View</h1>
      {datas.map(data => 
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>symbolName</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{data.name}</td>
      <td>{data.symbol}</td>
      <td>{data.price}</td>
    </tr>
  
  </tbody>
</Table>

        </div>
        )}
    </div>
}

export default View;