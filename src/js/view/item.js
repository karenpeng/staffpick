'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import LazyLoad from './lazyLoad'
import Info from './info'

console.dir(LazyLoad)
const Item = React.createClass({

  displayName: 'Item',

  // propTypes:{
  //   obj: React.propTypes.object,
  //   width: React.propTypes.number,
  //   height: React.propTypes.number,
  //   maxHeight: React.propTypes.number
  // },

  msg(){
    const ifr = ReactDom.findDOMNode(this.refs[this.props.obj.id])
    if(ifr !== null){
      console.dir(ifr)
      console.log('stop')
      var obj = {
        'method': 'pause'
      }
      ifr.contentWindow.postMessage(JSON.stringify(obj), ifr.src)
    }
  },

  render(){
    let url = "https://player.vimeo.com/video/" + this.props.obj.id
      //+ '?badge=0&autopause=0&player_id=0'

    return (
      <div className="item">
        <LazyLoad 
          childRef={this.props.obj.id}
          debug={this.props.obj.title}
          height={this.props.height}
          focusing={this.focusing}
          notFocusing={this.notFocusing}>
          <iframe
            ref={this.props.obj.id}
            id={this.props.obj.id}
            src={url}
            width={this.props.width}
            height={this.props.height}
            frameBorder="0" 
            webkitallowfullscreen mozallowfullscreen allowfFullScreen>
          </iframe>
        </LazyLoad>
        <Info
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