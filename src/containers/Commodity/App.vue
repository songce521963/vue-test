<template>
    <div>
        <commodity-operate @handleOpenDialog="handleOpenDialog"></commodity-operate>
        <commodity-List @handleOpenDialog="handleOpenDialog"></commodity-List>
        <el-dialog title="commodity" v-model="dialogValue" @handleCloseDialog="handleCloseDialog">
            <commodity-form ref="commodityForm" :dialogValue="dialogValue" @handleCloseDialog="handleCloseDialog"></commodity-form>
        </el-dialog>
    </div>
</template>
<script>
import CommodityOperate from './CommodityOperate'
import CommodityList from './CommodityList'
import CommodityForm from './CommodityForm'
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex'
export default {
    components: {
        CommodityForm,
        CommodityList,
        CommodityOperate
    },
    data() {
        return {
            dialogValue: false
        }
    },
    computed: {
        ...mapState(['commodity']),
    },
    methods: {
        handleCloseDialog() {
            this.dialogValue = false
        },
        handleOpenDialog() {
            this.dialogValue = true
        },
    }
}
</script>
