import React, { Component } from 'react'

class Search extends Component{

  render(){
    return(
      <div id="divBusca container">
        <input className="mt-2" type="text" id="txtBusca" placeholder="Buscar..."/>
        <button className="btn btn-secondary btn-sm ml-1" onClick={this.props.onRender}>adicionar</button>
      </div>
    )
  }
}

export default Search