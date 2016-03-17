import React from 'react'
import Tag from 'fit-tag'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Tag>标签1</Tag>
                <Tag style={{ background:'#f50', color: '#FFFFFF', marginLeft: '10px' }}>前端研发</Tag>
                <Tag style={{ background:'#2db7f5', color: '#FFFFFF', marginLeft: '10px' }}><a target="_blank" href="http://baidu.com">百度一下</a></Tag>
            </div>
        )
    }
}