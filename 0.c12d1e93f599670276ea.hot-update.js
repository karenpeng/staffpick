webpackHotUpdate(0,{

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(167);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commaNumber = __webpack_require__(170);

	var _commaNumber2 = _interopRequireDefault(_commaNumber);

	var Info = _react2['default'].createClass({

	  displayName: 'Info',

	  propTypes: {
	    description: _react2['default'].PropTypes.string.isRequired,
	    likes: _react2['default'].PropTypes.number,
	    plays: _react2['default'].PropTypes.number,
	    comments: _react2['default'].PropTypes.number,
	    width: _react2['default'].PropTypes.number.isRequired,
	    maxHeight: _react2['default'].PropTypes.number.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      overFlowHidden: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var bounds = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();
	    console.dir(bounds);
	    var height = bounds.top + bounds.bottom;
	    if (height > this.props.maxHeight) {
	      this.setState({
	        overFlowHidden: true
	      });
	    }
	  },

	  learnMore: function learnMore() {
	    this.setState({
	      overFlowHidden: false
	    });
	  },

	  render: function render() {
	    var overLayStyle = {
	      display: this.state.overFlowHidden ? 'block' : 'none',
	      width: this.props.width
	    };

	    return _react2['default'].createElement(
	      'div',
	      { className: 'wrap' },
	      _react2['default'].createElement('div', {
	        className: (0, _classnames2['default'])("info", { "info_hide": this.state.overFlowHidden }),
	        dangerouslySetInnerHTML: { __html: this.props.description } }),
	      _react2['default'].createElement(
	        'div',
	        {
	          className: 'overlay',
	          style: overLayStyle },
	        _react2['default'].createElement(
	          'strong',
	          {
	            className: 'learnMore',
	            onClick: this.learnMore },
	          'Read More...'
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'subinfo' },
	        _react2['default'].createElement(
	          'strong',
	          { className: 'plays' },
	          (0, _commaNumber2['default'])(this.props.plays),
	          ' plays'
	        ),
	        _react2['default'].createElement(
	          'strong',
	          { className: 'likes' },
	          (0, _commaNumber2['default'])(this.props.likes),
	          ' likes'
	        ),
	        _react2['default'].createElement(
	          'strong',
	          { className: 'comments' },
	          (0, _commaNumber2['default'])(this.props.comments),
	          ' comments'
	        )
	      )
	    );
	  }
	});

	module.exports = Info;

/***/ }

})