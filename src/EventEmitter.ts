class EventEmitter {
    private readonly listeners: Record<string, any>
    private readonly maxListener: number

    constructor(maxListener = 10) {
        this.listeners = {}
        this.maxListener = maxListener
    }

    /**
     * 订阅
     * @param event
     * @param cb
     */
    on(event: string, cb: any) {
        if (this.listeners[event]?.length >= this.maxListener) {
            throw ('超出最大监听限制')
        }
        if (Array.isArray(this.listeners[event])) {
            this.listeners[event].push(cb)
        } else {
            this.listeners[event] = [].concat(cb)
        }

    }

    /**
     * 订阅一次
     * @param event
     * @param cb
     */
    once(event: string, cb: any) {

    }

    /**
     * 取消订阅
     * @param event
     * @param cb
     */
    off(event: string, cb: any) {
        this.listeners[event]=this.listeners[event].filter((n: any) => n !== cb)
    }

    /**
     * 发布
     * @param event
     * @param arg
     */
    emit(event: string, ...arg: any[]) {
        this.listeners[event].forEach((cb: any) => {
            cb.apply(null, arg)
        })
    }
}

export {EventEmitter}