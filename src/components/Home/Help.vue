<template>
    <div>
        <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">
        </el-button>
    </div>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
            return {}
        },
        computed: {
            ...mapState(['fullscreenLoading'])
        },
        methods: {

        }
}
</script>
