import { Notification, Loading } from 'element-ui';

export const loading = (request, next) => {
    let loadingInstance = Loading.service({ fullscreen: true, customClass: 'el-loading' })
    setTimeout(() => {
        next((response) => {
            loadingInstance.close()
            if (!response.ok) {
                Notification.error('系统异常,请联系管理员。')
            }
            return response
        })
    }, 500)
}
