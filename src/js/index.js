'use strict'

import React from 'react'
import ReactDom from 'react-dom'

import MakeRequest from './request/request'
import {ListModel, ItemModel} from './model/model'
import App from './view/app'
import Loading from './view/loading'

let myList = new ListModel()

const Main = React.createClass({

  getInitialState(){
    return{
      list: myList,
      loaded: false
    }
  },

  makeModel(res){
    if(!res.length) {
      alert('ooops something went wrong')
      return
    }
    res.forEach(function(v){
      var item = new ItemModel(v)
      myList.addItem(item)
    })

    //minic network is slow
    //setTimeout(function(){
    this.setState({
      list: myList,
      loaded: true
    })
     // }.bind(this), 4000)
  },

  componentDidMount(){
    MakeRequest(this.makeModel)
  },

  render(){

    return (
      <div>
        <Loading hide={this.state.loaded}/>
        <App list={this.state.list}/>
      </div>
    )
  }
})

ReactDom.render(<Main/>, document.getElementById('container'))


