'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import r from 'r-dom'

import MakeRequest from './request/request'
import App from './view/app'

function render(info){
  ReactDom.render(r(App, {
      info: info
    }), document.getElementById('container'))
}

function cb(body){
  let info = []
  body.forEach(function(v){
    info.push({
      id: v.id,
      title: v.title,
      user_url: v.user_url,
      user_name: v.user_name,
      description: v.description
    })
  })
  render(info)
}

MakeRequest(cb)
