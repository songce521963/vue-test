/*import shop from '../../api/shop'*/
import Vue from 'vue'
import * as types from '../mutation-types'
import { _getList } from '../../api/commodity'

// initial state
// shape: [{ id, quantity }]
const state = {
    commoditys: [],
    commodityForm: {}
}

// getters
const getters = {
    //checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
    getCommodityList({ commit }) {
        _getList(commit)
    }
}

// mutations
const mutations = {
    [types.COMMODITY_SET_LIST](state, { commoditys }) {
        state.commoditys = commoditys
    },

    [types.COMMODITY_GET_LIST_SUCCESS](state) {
        console.log('获取成功')
    },

    [types.COMMODITY_GET_LIST_ERROR](state) {
       console.log("获取失败")
    },

    [types.COMMODITY_SET_FORM](state, { commodityForm }) {
       state.commodityForm = commodityForm
    },
    
}

export default {
    state,
    getters,
    actions,
    mutations
}
