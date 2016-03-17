import React from 'react'
import Tag from 'fit-tag'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Tag>标签1</Tag>
                <Tag style={{marginLeft:5}}>标签2</Tag>
            </div>
        )
    }
}