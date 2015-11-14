'use strict'

import React from 'react'
import r from 'r-dom'
import MyVideo from './video'

const MyList = React.createClass({

  displayName: 'List',

  // propTypes:{
  //   ids: React.propTypes.array
  // },

  render(){

    const videos = this.props.info.map((obj) => {
      return <MyVideo 
        id={obj.id} 
        key={obj.id}
        title={obj.title}
        user_url={obj.user_url}
        user_name={obj.user_name}
        width={this.props.width}
        height={this.props.height}
      ></MyVideo>
    })

    return (
      <div>
      {videos}
      </div>
    )
  }
})

module.exports = MyList

