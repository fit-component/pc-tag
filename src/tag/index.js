import React from 'react'
import classNames from 'classnames'

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
                {this.props.children}
            </div>
        )
    }
}

Tag.defaultProps = {

}