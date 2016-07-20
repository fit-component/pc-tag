export interface PropsInterface {
    /**
     * 是否可关闭
     */
    closable?: boolean

    /**
     * 关闭前回调
     */
    beforeClose?: Function

    /**
     * 关闭后回调
     */
    onClosed?: Function

    [x: string]: any
}

export class Props implements PropsInterface {
    closable = false

    beforeClose = (close: Function) => {
        return true
    }

    onClosed = () => {
    }
}

export interface StateInterface {
    closing?: boolean
    closed?: boolean
}

export class State implements StateInterface {
    closing = false
    closed = false
}