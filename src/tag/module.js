"use strict";
var Props = (function () {
    function Props() {
        this.closable = false;
    }
    Props.prototype.beforeClose = function (close) {
        return true;
    };
    Props.prototype.onClosed = function () {
    };
    return Props;
}());
exports.Props = Props;
var State = (function () {
    function State() {
        this.closing = false;
        this.closed = false;
    }
    return State;
}());
exports.State = State;
