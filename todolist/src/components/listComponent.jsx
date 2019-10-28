import React, { Component } from 'react'

class ListComponent extends Component{
  render(){
    return(
      <div className="list-group">{this.props.clique}</div>
    )
  }
}

export default ListComponent