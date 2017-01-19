<template>
	<div class="testChild">
		<h1>{{message}}</h1>
		<button @click="changeFatherTitle">点击改变父组件的title</button>
		<slot name="text">
			现在没有内容显示。
		</slot>
	</div>

</template>


<script>
export default {
	name: 'testChild',
	//子组件接受父组件的props，声明并且验证
	props:{
		message: String
		    // 基础类型检测 （`null` 意思是任何类型都可以）
/*	    propA: Number,
	    // 多种类型
	    propB: [String, Number],
	    // 必传且是字符串
	    propC: {
	      type: String,
	      required: true
	    },
	    // 数字，有默认值
	    propD: {
	      type: Number,
	      default: 100
	    },
	    // 数组／对象的默认值应当由一个工厂函数返回
	    propE: {
	      type: Object,
	      default: function () {
	        return { message: 'hello' }
	      }
	    },
	    // 自定义验证函数
	    propF: {
	      validator: function (value) {
	        return value > 10
	      }
	    }

type 可以是下面原生构造器：
    String
    Number
    Boolean
    Function
    Object
    Array

	    */
	},
	methods:{
		changeFatherTitle(){
			this.$emit('getChildMessage','你说啥？')
		}
	}
}
</script>

<style>
	
</style>