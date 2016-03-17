import React from 'react'
import Tag from 'fit-tag'

export default class Demo extends React.Component {

    handleToClose(close) {
        confirm('你确定要去掉这个标签吗?') ? close() : null
    }

    handleClosed() {
        alert('已经去掉了~');
    }

    render() {
        return (
            <div>
                <Tag onToClose={ this.handleToClose.bind(this) }
                     onClosed={ this.handleClosed.bind(this) }
                     style={{ background:'#2db7f5', color: '#FFFFFF', marginLeft: '10px' }}>标签1</Tag>
            </div>
        )
    }
}