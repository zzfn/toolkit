/**
 * 获取用户设备信息
 */
export class Os {
    /**
     * 用户操作系统
     */
    static getPlatform(){
        return window?.navigator?.platform
    }

    /**
     * 用户浏览器
     */
    static getBrowser(){
        return window.navigator.userAgent
    }
}
