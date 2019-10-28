import React, {Component} from 'react';
import Search from "./components/searchComponent"
import ListComponent from "./components/listComponent"

class App extends Component {

  state={
    coisas: []
  }

  handleClick =()=>{
    let elemento = document.getElementById("txtBusca").value
    if(elemento !== ""){
      this.setState({state: this.state.coisas.push(elemento)
      })
      document.getElementById("txtBusca").value = ""
    }
  }

  handleDelete=(e)=>{
    
    this.state.coisas.splice(e.target.id, 1)
    this.setState({coisas: this.state.coisas})
  
  }

  render(){
    return (
      <div className="App container">
        <nav className="nav navbar">
          <h1 className="navbar-brand">To do list App</h1>
        </nav>
        <Search onRender={this.handleClick}/>
        <ListComponent  clique={this.state.coisas.map( (ele, index) =>{
            return <li onClick={this.handleDelete} key={index} id={index} className="list-group-item list-group-item-secondary mt-1" >{ele}</li>
          })}>
          
        </ListComponent>
      </div>
    );
  }
  
}

export default App;
