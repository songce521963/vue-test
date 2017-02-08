<template>
    <div>
        <el-button type="primary" @click="handleAdd">Add</el-button>
        <el-table :data="commoditys" border style="width: 100%">
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
        <el-dialog title="commodity" v-model="commodityDialog">
            <commodity-form ref="commodityForm" @handleCommoditysAddRow="handleCommoditysAddRow" @handleCommoditysUpdateRow="handleCommoditysUpdateRow" @handleCloseDialog="handleCloseDialog" :commodityUrl="commodityUrl" :commodityPUrl="commodityPUrl" :commodityForm="commodityForm"></commodity-form>
        </el-dialog>
    </div>
</template>
<script>
import CommodityForm from './BCommodityForm'
export default {
    components: {
        CommodityForm
    },
    created() {
        this.commodityList()
        this.commodityForm = this.getCommodityForm()
    },
    data() {
        return {
            commoditys: [],
            commodityForm: {},
            commodityDialog: false,
            commodityUrl: '/api/commodity',
            commodityPUrl: '/api/commodity/{id}'
        }
    },
    watch: {
        commodityDialog(val, oldVal) {
            if (!val) {
                setTimeout(() => {
                    this.commodityForm = this.getCommodityForm()
                    this.$refs['commodityForm'].resetForm('commodityForm')
                }, 100)
            }
        }
    },
    methods: {
        getCommodityForm() {
            return {
                name: '',
                category: 1,
                slogan: '',
                pictureLink: '',
                demoLink: '',
                order: 0,
                imgLink: '',
				descLink: '',
				infoLink: ''
            }
        },
        commodityList() {
            let _this = this
            this.$resource(this.commodityUrl).get()
                .then((response) => {
                    _this.commoditys = response.data
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        handleAdd() {
            this.commodityDialog = true
        },
        handleEdit(index, row) {
            this.commodityForm = Object.assign({}, row)
            this.commodityDialog = true
        },
        handleDelete(index, row) {
            this.$confirm('Delete, Do you want to continue?', 'Confirm', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.deleteCommodity(index, row.id);
            }).catch(() => {
                this.$notify({
                    title: 'Success',
                    message: 'Deleted deleted',
                    type: 'info'
                });
            });
        },
        handleCloseDialog() {
            this.commodityDialog = false
        },
        handleCommoditysUpdateRow(commodity) {
        	this.commoditys = this.commoditys.map((item)=>{
        		if(item.id == commodity.id){
        			return commodity
        		}
        		return item
        	})
        },
        handleCommoditysAddRow(commodity) {
            //this.commoditys.push(commodity)
            this.commodityList()
        },
        deleteCommodity(index, id) {
            let _this = this
            this.$resource(this.commodityPUrl).delete({
                    id
                })
                .then((response) => {
                    _this.commoditys.splice(index, 1)
                    this.$notify({
                        message: 'Delete success!',
                        type: 'success'
                    });
                })
        }
    }
}
</script>
<style>
</style>
