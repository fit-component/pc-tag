import * as React from 'react'
import Tag from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Tag>设计大师</Tag>
                <Tag style={{ background:'#f50', color: '#FFFFFF', marginLeft: '10px' }}>前端研发</Tag>
                <Tag style={{ background:'#2db7f5', color: '#FFFFFF', marginLeft: '10px' }}><a target="_blank" href="http://baidu.com">百度一下</a></Tag>
            </div>
        )
    }
}