import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            closing: false,
            closed: false
        }
    }

    handleBeforeClose() {
        this.props.beforeClose(()=>{ this.handleDoClose() }) ? this.handleDoClose() : null
    }

    handleDoClose() {
        this.setState({
            closed: true
        }, ()=> {
            this.props.onClosed()
        })
    }

    render() {
        const { closable, className, children, ...others } = this.props
        const close = closable ? <i className="fa fa-close tag-close" onClick={this.handleBeforeClose.bind(this)}/> : ''
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })
        return (
            <span>
                {this.state.closed ? null : (
                    <span data-show={!this.state.closed} {...others} className={classes}>
                        <span className="tag-text">{children}</span>
                        {close}
                    </span>
                )}
            </span>
        )
    }
}

Tag.defaultProps = {
    // @desc 是否可关闭
    closable: false,

    // @desc 关闭前回调
    beforeClose() {
        return true
    },

    // @desc 关闭后回调
    onClosed() {
    }
}