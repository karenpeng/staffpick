'use strict'

import React from 'react'
import List from './list'

let myList = {}

const App = React.createClass({

  displayName: 'App',

  propTypes:{
    list: React.PropTypes.object.isRequired
  },

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

  handleFilter(event){
    myList.filterBy(event.target.value.toLowerCase())
    this.setState({
      list: myList
    })
  },

  render(){

    let tags = Object.keys(this.state.list.tags).sort()
    tags.unshift('All')

    const options = tags.map((s, index) =>{
      return <option value={s} key={index}>{s}</option>
    })

    return (
      <div>
        <img src="https://i.vimeocdn.com/channel/289181_980?mh=250" alt="Vimeo Staff Picks" />
        <div className="controlPanel">
          <div className="sorter" onClick={this.handleSort}>
            Sort By   <button id="playsBtn">Plays</button>
            <button id="likesBtn">Likes</button>
            <button id="commentsBtn">Comments</button>
            <button id="durationsBtn">Duration</button>
          </div>
          <span>Filter By   </span>
          <select className="filter" onChange={this.handleFilter}>
           {options}
          </select>
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