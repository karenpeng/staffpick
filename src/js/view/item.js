'use strict'

import React from 'react'
import ReactDom from 'react-dom'
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
  getInitialState(){
    return({
      focus: false
    }) 
  },

  onWindowScroll(){
    const node = ReactDom.findDOMNode(this)
    const threshold = node.scrollHeight
    const bounds = ReactDom.findDOMNode(this).getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const top = bounds.top + scrollTop
    const height = bounds.bottom - bounds.top

    if (top === 0 || (top <= (scrollTop + window.innerHeight + threshold)
                      && (top + height) > (scrollTop - threshold))) {
      this.setState({ focus: true });
      // const ifr = ReactDom.findDOMNode(this.refs[this.props.id])
      // var obj = {
      //   'method': '',
      //   'value'
      // }
      // ifr.contentWindow.postMessage(JSON.stringify(obj), ifr.src)
      this.props.dim(node.id)
    }
    
  },

  componentDidMount(){
    window.addEventListener('scroll', this.onWindowScroll)
  },

  render(){
    let url = "https://player.vimeo.com/video/" + this.props.obj.id
      //+ '?badge=0&autopause=0&player_id=0'

    return (
      <div className="item" ref={this.props.id} id={this.props.id}>
        <LazyLoad height={this.props.height}>
          <iframe 
            src={url}
            width={this.props.width}
            height={this.props.height}
            frameBorder="0" 
            webkitallowfullscreen mozallowfullscreen allowfFullScreen></iframe>
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