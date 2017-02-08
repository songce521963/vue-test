<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="日期" width="180" style="">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="住址" width="280" style="">
                <template scope="scope">
                    <el-icon name="address"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column label="权限" width="180">
                <template scope="scope">
                    <el-icon name="role"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.role }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    components: {},
    created() {
        console.log(this)
        this.getUsers()
    },
    data() {
        return {
            tableData: [],
            usersUrl: '/api/users',
            userUrl: '/api/user/{id}'
        }
    },
    watch: {
        '$lang' () {
            this.tableData = []
            this.getUsers()
        }
    },
    methods: {
        handleEdit(index, row) {
            this.$router.push({
                    name: 'page31',
                    params: {
                        userId: 1
                    }
                })
                //this.updateUser(index, row)
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteUser(index, row.id);
            }).catch(() => {
                this.$notify({
                    title: '成功',
                    message: '已取消删除',
                    type: 'info'
                });
            });
        },
        getUsers() {
            let _this = this
            this.$resource(this.usersUrl).get()
                .then((response) => {
                    _this.tableData = response.data
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        deleteUser(index, id) {
            let _this = this
            this.$resource(this.userUrl).delete({
                    id
                })
                .then((response) => {
                    //_this.tableData = response.data
                    //_this.tableData = _this.tableData.filter(data=>data.id != id)
                    _this.tableData.splice(index, 1)
                    this.$notify({
                        message: '删除成功!',
                        type: 'success'
                    });
                })
        }

    }
}
</script>
