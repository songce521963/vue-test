<template>
    <div>
        <el-table :data="commodity.commoditys" border style="width: 100%">
            <el-table-column prop="name" label="名称" width="120">
            </el-table-column>
            <el-table-column prop="Category.name" label="分类区分" width="100">
            </el-table-column>
            <el-table-column prop="summary" label="简介">
            </el-table-column>
            <el-table-column prop="picture" label="缩略图">
            </el-table-column>
            <el-table-column prop="productDemo" label="DemoLink">
            </el-table-column>
            <el-table-column prop="homePage" label="公司首页">
            </el-table-column>
            <el-table-column prop="productDesc" label="产品营销说明连接">
            </el-table-column>
            <el-table-column prop="productInfo" label="产品资料连接">
            </el-table-column>
            <el-table-column label="">
                <template scope="scope" style="text-align:center">
                    <el-button size="small" icon="edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
                    <el-button size="small" icon="delete" type="danger" @click="handleDelete(scope.$index, scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex'
import {
    COMMODITY_SET_FORM
} from '../../store/mutation-types'
import {
    _delete
} from '../../api/commodity'
export default {
    computed: {
        ...mapState(['commodity'])
    },
    methods: {
        //...mapMutations([ADD_COUNT2]),
        ...mapActions([
            'getCommodityList' // 映射 this.increment() 为 this.$store.dispatch('increment')
        ]),
        handleEdit(index, row) {
            let commodityForm = Object.assign({}, row)
            this.$store.commit(COMMODITY_SET_FORM, {
                commodityForm
            })
            this.$emit('handleOpenDialog')
        },
        handleDelete(index, row) {
            this.$confirm('Delete, Do you want to continue?', 'Confirm', {
                type: 'warning'
            }).then(() => {
                _delete(row.id, this)
            })
        }
    },
    created() {
        this.getCommodityList()
    }
}
</script>
