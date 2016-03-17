import React from 'react'
import classNames from 'classnames'
import Animate from 'rc-animate'
import './index.scss'

export default class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            closing: false,
            closed: false
        }
    }

    handleToClose(e) {
        this.props.onToClose(()=> {
            this.handleDoClose()
        })
    }

    handleDoClose() {
        this.setState({
            closed: true
        }, ()=> {
            this.props.onClosed();
        });
    }

    render() {
        const { closable, className, children, ...others } = this.props;
        const close = closable ? <i className="fa fa-close tag-close" onClick={this.handleToClose.bind(this)}/> : '';
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
        );
    }
}

Tag.defaultProps = {
    closable: false,
    onToClose() {
    },
    onClosed() {
    }
}


export default Tag;
