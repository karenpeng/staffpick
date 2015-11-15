'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import commaNumber from 'comma-number'

const Info = React.createClass({

  displayName: 'Info',

  // propTypes:{
  //   id: React.propTypes.number,
  //   description: React.propTypes.string,
  //   likes: React.propTypes.number,
  //   plays: React.propTypes.number,
  //   comments: React.propTypes.number,
  //   duration: React.propTypes.number,
  //   width: React.propTypes.number,
  //   maxHeight: React.propTypes.number
  // },

  getInitialState(){
    return{
      overFlowHidden: false
    }
  },

  componentDidMount(){
    let scrollHeight = ReactDom.findDOMNode(this.refs[this.props.id]).scrollHeight
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
         ref={this.props.id}
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
            {' '}
            <strong className="likes">{commaNumber(this.props.likes)} likes</strong>
            {' '}
            <strong className="comments">{commaNumber(this.props.comments)} comments</strong>
        </div>
      </div>
        
    )
  }
})

module.exports = Info