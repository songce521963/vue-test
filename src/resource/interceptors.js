import { Notification, Loading } from 'element-ui'
import Vue from 'vue'

/*export const nprogress = (request, next) => {
    NProgress.start();
    next((response) => {
        NProgress.done();
        return response
    })
}*/

export const loading = (request, next) => {
    let loadingInstance = Loading.service({ fullscreen: true, customClass: 'el-loading' })
    setTimeout(() => {
        next((response) => {
            loadingInstance.close()
            return response
        })
    }, 500)
}

export const locale = (request, next) => {
    let lang = Vue.config.lang
    request.headers.set('lang', lang)
    next((response) => {
        return response
    })
}

export const error = (request, next) => {
    next((response) => {
        if (!response.ok) {
            Notification.error('系统异常,请联系管理员。')
        }
        return response
    })
}
