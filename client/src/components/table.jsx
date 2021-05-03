import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Button} from "react-bootstrap";
import axios from "axios";
class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        name: 'save'
        
      };

      this.handleClick = this.handleClick.bind(this)
    }
    
     handleClick() {
         this.setState({name: "view"})
     }
    componentDidMount() {
      fetch('/wheath')
        .then(res => res.json())
        .then(result => {
          this.setState({
            
            items: result
          });
        });
       
        
      
    }
    
   
    
  
    render() {
      const { items } = this.state;
      const { name } = this.state;
      const rowEvents =  {
           onClick: (e,row,rowIndex) => {
              if (e.target.type == "button") {
                console.log(row)
                 const newData = {
                   name: row.name,
                   symbol: row.symbol,
                   price : row.lastPrice
                 } 
                axios.post('http://localhost:3001/create', newData)
                
                
              }
           }
       }
      const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'name' },
        { dataField: 'symbol', text: 'symbol' },
        { dataField: 'lastPrice', text: 'price' },
        {
            dataField: 'link',
            text: 'Click to save',
            formatter: (rowContent, row) => {
              return (    
                <Button varient= "success" values={row} className= "save" id="view" >{name}</Button>
              )
            }
        }


      ]
     
        return (
        
         <div>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                <h3>{item.symbol}</h3>
                <p>{item.lastPrice}</p>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>

          <BootstrapTable
            keyField= "name"
            data={ items }
           columns={ columns }
           pagination={ paginationFactory()}
           rowEvents = {rowEvents}
             
           />
         </div>

        );
      }
    }



  

  export default Table;