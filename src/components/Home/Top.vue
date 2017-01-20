<template>
    <div id="top">
        <h2>点击次数:{{count}},计算之后的结果是:{{computedCount}} <button @click="ADD_COUNT2">点击</button>
			用户名称:{{userInfo.name}}, 权限是:{{userInfo.role}}
			<!-- <span v-bind:class="{wait.style: wait.display}">{{wait.message}}</span> -->
			<span v-bind:class="[wait.display? 'in': 'out']">{{wait.message}}</span>
			<locale />
		</h2>
		
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex'
import Locale from './Locale'
import {
    ADD_COUNT2
} from '../../store/mutation-types'

export default {
    name: 'top',
    components: {
    	Locale
    },
    data() {
        return {
            message: '我是头,我是不会动的。',
        }
    },
    computed: {
        /*getCount(){
        	return this.$store.getters.getCount
        }*/
        ...mapState(['count', 'userInfo', 'wait']),
        ...mapGetters(['computedCount'])
    },
    methods: {
        ...mapMutations([ADD_COUNT2])
    }
}
</script>
<style>
.in {
    display: block;
}

.out {
    display: none;
}
</style>
