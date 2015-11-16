'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import Item from './item'

const List = React.createClass({

  displayName: 'List',

  propTypes:{
    lists: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    maxHeight: React.PropTypes.number.isRequired
  },

  render(){

    const items = this.props.lists.map((obj, index) => {
      return <Item 
        obj={obj}
        ref={obj.id}
        key={index}      
        width={this.props.width}
        height={this.props.height}
        maxHeight={this.props.maxHeight}>
      </Item>
    })

    return (
      <div>
      {items}
      </div>
    )
  }
})

module.exports = List
