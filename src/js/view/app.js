'use strict'

import React from 'react'
import List from './list'

let myList = {}

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

  componentDidMount(){
    myList = this.props.list
    this.setState({
      list: myList
    })
  },

  handleSort(event){
    myList.sortBy(event.target.textContent)
    this.setState({
      list: myList
    })
  },

  render(){
    return (
      <div>
        <img src="https://i.vimeocdn.com/channel/289181_980?mh=250" alt="Vimeo Staff Picks" />
        <div className="filter" onClick={this.handleSort}>
          Sort By   <button id="playsBtn">Plays</button>
          <button id="likesBtn">ikes</button>
          <button id="commentsBtn">Comments</button>
          <button id="durationsBtn">Duration</button>
        </div>
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