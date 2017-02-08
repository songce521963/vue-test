import Vue from 'vue'
import * as types from '../store/mutation-types'

const COMMODITY_URL = '/api/commodity'
const COMMODITY_P_URL = '/api/commodity/{id}'
const CATEGORY_URL = '/api/category'

export const _getList = commit => {
    Vue.resource(COMMODITY_URL).get()
        .then((response) => {
            commit(types.COMMODITY_SET_LIST, { commoditys: response.body })
            commit(types.COMMODITY_GET_LIST_SUCCESS)
        }, (response) => {
            commit(types.COMMODITY_GET_LIST_ERROR)
        })
}

export const _delete = (id, _this) => {
    Vue.resource(COMMODITY_P_URL).delete({
            id
        })
        .then((response) => {
            _this.getCommodityList()
            _this.$notify({
                message: 'Delete success!',
                type: 'success'
            })
        })
}

export const _save = (form, _this) => {
    Vue.resource(COMMODITY_URL).save(form)
        .then((response) => {
            _this.$emit('handleCloseDialog')
            _this.getCommodityList()
            _this.$notify({
                type: 'success',
                message: '添加成功!'
            })
        })
}

export const _post = (form, _this) => {
    Vue.resource(COMMODITY_P_URL).update({
            id: form.id
        }, form)
        .then((response) => {
            _this.$emit('handleCloseDialog')
            _this.getCommodityList()
            _this.$notify({
                type: 'success',
                message: '修改成功!'
            })
        })
}

export const _getCategory = (_this) => {
    Vue.resource(CATEGORY_URL).get()
        .then((response) => {
            _this.categorys = response.body
        })
}
