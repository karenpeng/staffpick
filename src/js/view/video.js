'use strict'

import React from 'react'
import r from 'r-dom'
import LazyLoad from 'react-lazy-load'

const MyVideo = React.createClass({

  displayName: 'Video',

  // propTypes:{
  //   id: React.propTypes.number
  // },

  render(){
    let url = "https://player.vimeo.com/video/" 
      + this.props.id
      //+ '?badge=0&autopause=0&player_id=0'

    return (
      <div className="item">
        <LazyLoad height={this.props.height}>
          <iframe 
            src={url} 
            width={this.props.width}
            height={this.props.height}
            frameBorder="0" 
            webkitallowfullscreen mozallowfullscreen allowfFullScreen></iframe>
          <p>
            <a href="https://vimeo.com/143806678">{this.props.title}</a> from <a href={this.props.user_url}>{this.props.user_name} </a> on <a href="https://vimeo.com">Vimeo
            </a>.
          </p>
        </LazyLoad>
      </div>
    )
  }
})

module.exports = MyVideo