'use strict'

import React from 'react'
import classNames from 'classnames'
import LazyLoad from 'react-lazy-load'
import Info from './info'

const Item = React.createClass({

  displayName: 'Item',

  // propTypes:{
  //   obj: React.propTypes.object,
  //   width: React.propTypes.number,
  //   height: React.propTypes.number,
  //   maxHeight: React.propTypes.number
  // },

  render(){
    let url = "https://player.vimeo.com/video/" + this.props.obj.id
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
        </LazyLoad>
        <Info
          id={this.props.obj.id}
          ref={this.props.obj.id}
          description={this.props.obj.description}
          likes={this.props.obj.likes}
          plays={this.props.obj.plays}
          comments={this.props.obj.comments}
          duration={this.props.obj.duration} 
          width={this.props.width}
          maxHeight={this.props.maxHeight}></Info>
      </div>
    )
  }
})

module.exports = Item