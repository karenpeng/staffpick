'use strict'

import React from 'react'
import List from './list'

const App = React.createClass({

  displayName: 'App',

  // propTypes:{
  //   list: React.propTypes.object
  // },

  getInitialState(){
    return{
      list: this.props.list
    }
  },

  handleSort(val){
    list.sortBy(val)
  },

  render(){
   console.log(this.state.list)
    return (
      <div>
        <img src="https://i.vimeocdn.com/channel/289181_980?mh=250" alt="Vimeo Staff Picks" />
        <div className="filter"></div>
        <List 
          lists={this.state.list.items}
          width={960}
          height={540}
          maxHeight={220}></List>
      </div>
    )
  }
})

module.exports = App