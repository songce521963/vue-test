<template>
    <div class="userForm">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm" style="text-align:left">
            <el-form-item label="用户ID">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="权限" prop="role">
                <el-select v-model="form.role" placeholder="请选择权限">
                    <el-option label="System" value="system"></el-option>
                    <el-option label="Admin" value="admin"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item> -->
            <el-form-item label="用户地址">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center">
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    created() {
        let id = this.$route.params.userId
        if (id) this.getUser(id)
    },
    data() {
        return {
            form: {
                id: '',
                name: '',
                role: '',
                address: '',
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入活动名称',
                    trigger: 'blur'
                }, {
                    min: 3,
                    max: 5,
                    message: '长度在 3 到 5 个字符',
                    trigger: 'blur'
                }],
                role: [{
                    required: true,
                    message: '请选择权限',
                    trigger: 'change'
                }]
            },
            userUrl: '/api/user/{id}',
            addUserUrl: '/api/user'
        }
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('您确定要提交吗, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$route.params.userId ? this.updateUser() : this.addUser()
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消提交'
                        });
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getUser(id) {
            let _this = this
            this.$resource(this.userUrl).get({
                    id
                })
                .then((response) => {
                    _this.form = response.data
                        //this.$message('获取成功')
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        addUser() {
            let _this = this
            this.$resource(this.addUserUrl).save(this.form)
                .then((response) => {
                    //_this.form = response.data
                    this.$notify({
                        type: 'success',
                        message: '添加成功!'
                    });
                    this.$router.push({
                        name: 'page2'
                    })
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        updateUser() {
            let _this = this
            this.$resource(this.userUrl).update({
                    id: this.form.id
                }, this.form)
                .then((response) => {
                    //_this.tableData = response.data
                    this.$router.push({
                        name: 'page2'
                    })
                    this.$notify({
                        type: 'success',
                        message: '修改成功!'
                    });
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
}
</script>
<style>
</style>
