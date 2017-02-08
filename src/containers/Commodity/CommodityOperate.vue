<template>
    <div class="operate">
        <el-button type="primary" @click="handleAdd" style="float:left">Add</el-button>
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex'
import { COMMODITY_SET_FORM } from '../../store/mutation-types'
export default {
    methods: {
        handleAdd() {
        	let commodityForm = this.getCommodityForm()
        	this.$store.commit(COMMODITY_SET_FORM,{ commodityForm })
            this.$emit('handleOpenDialog')
        },
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
    }
}
</script>
<style>
.operate {
    width: 100%;
}
</style>
