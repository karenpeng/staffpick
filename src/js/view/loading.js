'use strict'

import React from'react'

const Loading = React.createClass({

  displayName: 'Loading',

  propTypes:{
    hide: React.PropTypes.bool.isRequired
  },

  render: function(){
    return (
      <div className="load" style={{display: this.props.hide ? 'none' : 'block'}}>
        <span className='loading'>Loading</span>
        <span className='loading-spinner'></span>
      </div>
      )
  }

})

module.exports = Loading