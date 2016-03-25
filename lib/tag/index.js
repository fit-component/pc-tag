'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_React$Component) {
    _inherits(Tag, _React$Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this, props));

        _this.state = {
            closing: false,
            closed: false
        };
        return _this;
    }

    _createClass(Tag, [{
        key: 'handleBeforeClose',
        value: function handleBeforeClose() {
            var _this2 = this;

            this.props.beforeClose(function () {
                _this2.handleDoClose();
            }) ? this.handleDoClose() : null;
        }
    }, {
        key: 'handleDoClose',
        value: function handleDoClose() {
            var _this3 = this;

            this.setState({
                closed: true
            }, function () {
                _this3.props.onClosed();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var closable = _props.closable;
            var className = _props.className;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['closable', 'className', 'children']);

            var close = closable ? _react2.default.createElement('i', { className: 'fa fa-close tag-close', onClick: this.handleBeforeClose.bind(this) }) : '';
            var classes = (0, _classnames2.default)(_defineProperty({
                'lib-pc-tag-lib-tag': true
            }, className, className));
            return _react2.default.createElement(
                'span',
                null,
                this.state.closed ? null : _react2.default.createElement(
                    'span',
                    _extends({ 'data-show': !this.state.closed }, others, { className: classes }),
                    _react2.default.createElement(
                        'span',
                        { className: 'tag-text' },
                        children
                    ),
                    close
                )
            );
        }
    }]);

    return Tag;
}(_react2.default.Component);

exports.default = Tag;


Tag.defaultProps = {
    // @desc 是否可关闭
    closable: false,

    // @desc 关闭前回调
    beforeClose: function beforeClose() {
        return true;
    },


    // @desc 关闭后回调
    onClosed: function onClosed() {}
};