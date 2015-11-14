'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import r from 'r-dom'
import classNames from 'classnames'
import LazyLoad from 'react-lazy-load'

const MyVideo = React.createClass({

  displayName: 'Video',

  // propTypes:{
  //   id: React.propTypes.number
  // },
  getInitialState(){
    return{
      overFlowHidden: false
    }
  },

  componentDidMount(){
    let scrollHeight = ReactDom.findDOMNode(this.refs[this.props.id]).scrollHeight
    if(scrollHeight > 200){
      this.setState({
        overFlowHidden: true
      })
    }
  },

  learnMore(){
    this.setState({
      overFlowHidden: false
    })
  },

  render(){
    let url = "https://player.vimeo.com/video/" 
      + this.props.id
      //+ '?badge=0&autopause=0&player_id=0'
    let overLayStyle ={
      display: this.state.overFlowHidden? 'block' : 'none',
      width: this.props.width
    }

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
        <div className="wrap">
          <div 
           ref={this.props.id}
           className={classNames("info", {"info_hide" : this.state.overFlowHidden })}
           dangerouslySetInnerHTML={{__html:this.props.description}}>
          </div>
          <div 
            className="overlay" 
            style={overLayStyle}>
              <span 
                className="learnMore"
                onClick={this.learnMore}>Read More...</span>
          </div>
        </div>
        
      </div>
    )
  }
})

module.exports = MyVideo