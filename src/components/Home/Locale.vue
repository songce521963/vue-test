<template>
    <div class="locale">
        <el-dropdown>
            <el-button type="primary">
                {{ $t('message.titleLanguage') }}<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(lang, index) of langs">
                    <div style="width:100%" @click="handleSelect(lang.code)">{{lang.text}}</div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import Vue from 'vue'
import { saveLang } from '../../util/storage'
export default {
    data() {
            return {
                error: null,
                loading: false,
                selected: '',
                langs: [{
                    code: 'en',
                    text: 'English'
                }, {
                    code: 'ja',
                    text: '日本語'
                }, {
                    code: 'zh',
                    text: '中文'
                }]
            }
        },
        created() {
            this.selected = Vue.config.lang
        },
        computed: {},
        watch: {
            selected(val, old) {

                //window.location.reload()
                console.log(this.$router)
                var self = this
                    /*if (!Vue.locale(val)) {
                        this.loading = true
                        this.load(val).then((json) => {
                            self.loading = false
                            if (Object.keys(json).length === 0) {
                                return Promise.reject(new Error('locale empty !!'))
                            } else {
                                Vue.locale(val, json)
                                Vue.config.lang = val
                                return Promise.resolve()
                            }
                        }).catch((error) => {
                            self.error = error.message
                        })
                    } else {
                        //Vue.config.lang = val
                    }*/
            }
        },
        methods: {
            handleClick() {

            },
            handleSelect(code) {
                //window.location.reload()
                Vue.config.lang = code
                saveLang({key:'lang',data:code})

                let name = this.$router.history.current.name
                let param = this.$router.history.current.param

                param = Object.assign({}, param, {lang:code})

                this.$router.push({
                    name: name,
                    params: param
                })
                
            },
            load(code) {
                return fetch('/locale/' + code, {
                    method: 'get',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    return res.json()
                })
            }
        }
}
</script>
<style>
.locale {
    float: right;
    margin-top: -10px;
    margin-right: 40px;
}
</style>
