import React from 'react'
import { findDOMNode } from 'react-dom'
import classNames from 'classnames'

const LazyLoad = React.createClass({

  displayName: 'lazyLoad',

  propTypes:{
    children: React.PropTypes.node.isRequired,
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    threshold: React.PropTypes.number,
    childRef: React.PropTypes.number,
    //lightUp: React.PropTypes.func.isRequired,
    msg: React.PropTypes.func.isRequired
  },

  getDefaultProps(){
    return({
      threshold: 0
    })
  },
  
  getInitialState(){
    return({
      visible: false
    })
  },

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll)
    window.addEventListener('resize', this.onWindowScroll)
    this.onWindowScroll()
  },

  componentDidUpdate() {
    if (!this.state.visible) this.onWindowScroll()
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowScroll)
  },

  onWindowScroll() {
    const { threshold } = this.props

    const bounds = findDOMNode(this).getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const top = bounds.top + scrollTop
    const height = bounds.bottom - bounds.top

    if (top === 0 || (top <= (scrollTop + window.innerHeight + threshold)
                      && (top + height) > (scrollTop - threshold))) {
      this.setState({ visible: true })
      //this.props.lightUp()
    }else{
      this.props.msg(this.props.childRef)
    }
  },

  render() {
    const elStyles = {
      height: this.props.height,
    };
    const elClasses = classNames({
      'lazy-load': true,
      'lazy-load-visible': this.state.visible
    })

    return (
      <div className={elClasses} style={elStyles}>
        {this.state.visible && this.props.children}
      </div>
    );
  }
})

module.exports = LazyLoad