'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import Item from './item'

const List = React.createClass({

  displayName: 'List',

  // propTypes:{
  //   lists: React.propTypes.array,
  //   width: React.propTypes.number,
  //   height: React.propTypes.number,
  //   maxHeight: React.propTypes.number
  // },
  dim(id){
    const node = ReactDom.findDOMNode(this.refs.id)
    console.log(node)
  },

  render(){

    const items = this.props.lists.map((obj) => {
      return <Item 
        obj={obj}
        key={obj.id}      
        width={this.props.width}
        height={this.props.height}
        maxHeight={this.props.maxHeight}
        dim={this.dim}></Item>
    })

    return (
      <div>
      {items}
      </div>
    )
  }
})

module.exports = List

