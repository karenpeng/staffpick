'use strict'

import React from 'react'
import r from 'r-dom'
import MyList from './list'

const App = React.createClass({

  displayName: 'App',

  // propTypes:{
  //   id: React.propTypes.number
  // },

  render(){
   
    return (
      <div>
        <img src="https://i.vimeocdn.com/channel/289181_980?mh=250" alt="Vimeo Staff Picks" />
        <MyList 
          info={this.props.info}
          width={960}
          height={540}></MyList>
      </div>
    )
  }
})

module.exports = App