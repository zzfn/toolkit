/**
 * 获取用户设备信息
 */
export class Os {
    private readonly performanceTiming: PerformanceTiming

    constructor() {
        this.performanceTiming = window.performance.timing
    }

    /**
     * 用户操作系统
     */
    static getPlatform() {
        return window?.navigator?.platform
    }

    /**
     * 用户浏览器
     */
    static getBrowser() {
        return window.navigator.userAgent
    }

    getFpt() {
        const {domLoading, navigationStart} = this.performanceTiming
        return domLoading - navigationStart
    }

    getTti() {
        const {domInteractive, navigationStart} = this.performanceTiming
        return domInteractive - navigationStart
    }
}
