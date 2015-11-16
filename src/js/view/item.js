'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import LazyLoad from './lazyLoad'
import Info from './info'

const Item = React.createClass({

  displayName: 'Item',

  propTypes:{
    obj: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    maxHeight: React.PropTypes.number.isRequired,
  },

  getDefaultProps(){
    return({
      obj: {
        id: 0,
        title: '',
        description: '',
        likes: 0,
        plays: 0,
        comments: 0,
        duration: 0
      }
    })
  },

  getInitialState(){
    return({
      fade: false
    })
  },

  msg(pro){
    const ifr = ReactDom.findDOMNode(this.refs[pro])
    if(ifr !== null){
      this.setState({
        fade: true
      })
      var obj = {
        'method': 'pause'
      }
      ifr.contentWindow.postMessage(JSON.stringify(obj), ifr.src)
    }
  },

  lightUp(){
    this.setState({
      fade: false
    })
  },

  render(){
    let url = "https://player.vimeo.com/video/" + this.props.obj.id
      //+ '?badge=0&autopause=0&player_id=0'

    return (
      <div className="item" /*style={{opacity: this.state.fade? 0.2 : 1}}*/>
        <LazyLoad 
          childRef={this.props.obj.id}
          debug={this.props.obj.title}
          height={this.props.height}
          lightUp={this.lightUp}
          msg={this.msg}>
          <iframe
            ref={this.props.obj.id}
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
          width={this.props.width}
          maxHeight={this.props.maxHeight}></Info>
      </div>
    )
  }
})

module.exports = Item