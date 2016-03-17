import React from 'react'
import Tag from 'fit-tag'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Tag>标签1</Tag>
                <Tag style={{ background:'#2db7f5', color: '#FFFFFF', marginLeft: '10px' }}>标签1</Tag>
                <Tag style={{ background:'#27c24c', color: '#FFFFFF', marginLeft: '10px' }}>标签1</Tag>
                <Tag style={{ background:'#f50', color: '#FFFFFF', marginLeft: '10px' }}>标签1</Tag>
            </div>
        )
    }
}