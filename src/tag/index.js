"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var module = require('./module');
var src_1 = require('../../../../common/transmit-transparently/src');
require('./index.scss');
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag(props) {
        _super.call(this, props);
        this.state = new module.State();
    }
    Tag.prototype.handleBeforeClose = function () {
        var _this = this;
        this.props.beforeClose(function () {
            _this.handleDoClose();
        }) ? this.handleDoClose() : null;
    };
    Tag.prototype.handleDoClose = function () {
        var _this = this;
        this.setState({
            closed: true
        }, function () {
            _this.props.onClosed();
        });
    };
    Tag.prototype.render = function () {
        var close = this.props.closable ? React.createElement("i", {className: "fa fa-close tag-close", onClick: this.handleBeforeClose.bind(this)}) : '';
        var classes = classNames((_a = {
                '_namespace': true
            },
            _a[this.props['className']] = !!this.props['className'],
            _a
        ));
        return (React.createElement("span", null, this.state.closed ? null : (React.createElement("span", React.__spread({"data-show": !this.state.closed}, src_1.others(new module.Props(), this.props), {className: classes}), React.createElement("span", {className: "tag-text"}, this.props['children']), close))));
        var _a;
    };
    Tag.defaultProps = new module.Props();
    return Tag;
}(React.Component));
exports.__esModule = true;
exports["default"] = Tag;
