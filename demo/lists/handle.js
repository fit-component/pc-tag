import React from 'react'
import Tag from 'fit-tag'

export default class Demo extends React.Component {

    handleBeforeClose(close) {
        setTimeout(function () {
            close()
        }, 1000)
        return false
    }

    handleClosed() {
        console.log('已经关闭了~');
    }

    render() {
        return (
            <div>
                <Tag closable
                     style={{ background:'#2db7f5', color: '#FFFFFF' }}>点我立即关闭</Tag>

                <Tag closable
                     beforeClose={ this.handleBeforeClose.bind(this) }
                     onClosed={ this.handleClosed.bind(this) }
                     style={{ background:'#87d068', color: '#FFFFFF', marginLeft: '10px' }}>点我1秒后关闭</Tag>
            </div>
        )
    }
}