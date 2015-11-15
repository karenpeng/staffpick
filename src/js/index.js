'use strict'

import React from 'react'
import ReactDom from 'react-dom'

import MakeRequest from './request/request'
import {ListModel, ItemModel} from './model/model'
import App from './view/app'

function render(list){
  ReactDom.render(<App list={list}/>, document.getElementById('container'))
}

function cb(body){
  let list = new ListModel()
  body.forEach(function(v){
    var item = new ItemModel(v)
    list.addItem(item)
  })
  render(list)
}

MakeRequest(cb)
