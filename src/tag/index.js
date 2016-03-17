import React from 'react'
import classNames from 'classnames'
import Icon from 'fit-icon';

export default class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, active, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        return (
            <div {...others} className={classes}>
                {this.props.children} <Icon type="cross" />
            </div>
        )
    }
}

Tag.defaultProps = {}
