import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Tag extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    props:module.PropsInterface

    constructor(props:any) {
        super(props)
        this.state = new module.State()
    }

    handleBeforeClose() {
        this.props.beforeClose(()=> {
            this.handleDoClose()
        }) ? this.handleDoClose() : null
    }

    handleDoClose() {
        this.setState({
            closed: true
        }, ()=> {
            this.props.onClosed()
        })
    }

    render() {
        const close = this.props.closable ?<i className="fa fa-close tag-close"
                                              onClick={this.handleBeforeClose.bind(this)}/> : ''
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })
        return (
            <span>
                {this.state.closed ? null : (
                    <span data-show={!this.state.closed} {...others(new module.Props(), this.props)}
                          className={classes}>
                        <span className="tag-text">{this.props['children']}</span>
                        {close}
                    </span>
                )}
            </span>
        )
    }
}