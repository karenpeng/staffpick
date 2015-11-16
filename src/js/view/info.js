'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import commaNumber from 'comma-number'

const Info = React.createClass({

  displayName: 'Info',

  propTypes:{
    description: React.PropTypes.string.isRequired,
    likes: React.PropTypes.number,
    plays: React.PropTypes.number,
    comments: React.PropTypes.number,
    width: React.PropTypes.number.isRequired,
    maxHeight: React.PropTypes.number.isRequired
  },

  getInitialState(){
    return{
      overFlowHidden: false
    }
  },

  componentDidMount(){
    let scrollHeight = ReactDom.findDOMNode(this).scrollHeight
    if(scrollHeight > this.props.maxHeight){
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
    let overLayStyle ={
      display: this.state.overFlowHidden? 'block' : 'none',
      width: this.props.width
    }

    return (
     
      <div className="wrap">
        <div
         className={classNames("info", {"info_hide" : this.state.overFlowHidden })}
         dangerouslySetInnerHTML={{__html:this.props.description}}>
        </div>
        <div 
          className="overlay" 
          style={overLayStyle}>
            <strong 
              className="learnMore"
              onClick={this.learnMore}>Read More...</strong>
        </div>
        <div className="subinfo">
            <strong className="plays">{commaNumber(this.props.plays)} plays</strong>
            <strong className="likes">{commaNumber(this.props.likes)} likes</strong>
            <strong className="comments">{commaNumber(this.props.comments)} comments</strong>
        </div>
      </div>
        
    )
  }
})

module.exports = Info