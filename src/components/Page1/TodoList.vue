<template>
	<div>
		<h1>{{title}}  {{ $t('message.hello') }}</h1>
		<h2>点击次数:{{count}},计算之后的结果是:{{computedCount}}</h2>
		<button @click="addCount">点击</button>
		<button @click="getUserInfoAsync">获取用户信息</button>
		<form>
			language <input type="text" v-model="newItem.language"/>
			commont <input type="text" v-model="newItem.commont"/>
			<button type="button" @click="addItem">添加</button>
		</form>
		<span>{{getCompleteCount}}</span>
		<table>
			<thead>
				<th>
					<td>id</td>
					<td>语言</td>
					<td>详细</td>
					<td>状态</td>
					<td>编辑</td>
				</th>
			</thead>
			<tbody>
				<tr v-for="(item, index) of items" v-bind:class="{complete:item.complete}">
					<td v-text="item.id"></td>
					<td v-text="item.language"></td>
					<td v-text="item.commont"></td>
					<td @click="completed(index)" >{{item.complete?'完成':'未完成'}}</td>
					<td>
						 <button v-on:click="deleteItem(index)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
		<a @click="searchItem('all')">All</a>
		<a @click="searchItem('finished')">Finished</a>
		<a @click="searchItem('unfinished')">Unfinished</a>
		<test-child :message="message" @getChildMessage="getChildMessage">
			<h1 slot="text">把你干掉吧</h1>
		</test-child>
	<div>
</template>

<script>	
import TestChild from './Child'
import { ADD_COUNT, GET_USER_INFO } from '../../store/mutation-types'

export default {
	components:{
		TestChild
	},
/*	ready: function() {
        this.getTodoList();
    },*/
	created(){
		this.getTodoList();
	},
	//数据
	data(){
/*		let items = getData('vue_test_todos');*/
		let newItem = createItem();
		return {
			title: 'Hello Worldssssssssssss!',
			newItem: newItem,
			items: [],
			message: '你给我滚犊子',
			todoUrl: '/api/todo/{id}',
			todosUrl: '/api/todos',
		}
	},
	//监视
	watch:{
		items:{
			handler(val,oldVal){
				//saveData({key:'vue_test_todos',data:this.items})
			},
			deep:true
		}
	},
	//计算
	computed:{
		getCompleteCount(){
			let count = 0;
			this.items.map(item=>{
				if(item.complete){
					count++;
				}
			})
			return count;
		},
		count(){
			return this.$store.state.count
		},
		computedCount(){
			return this.$store.getters.computedCount
		}
	},
	//事件
	methods:{
		addCount(){
			let amount = 1;
			this.$store.commit(ADD_COUNT,{amount})
		},
		getUserInfoAsync(){
			this.$store.dispatch('getUserInfo')
		},
		getTodoList(){
			/*1.*/
			/*
			let param = {};
			this.$http.get(this.apiUrl,{})
			.then(response=>{
	            	//_this.$set('alllist',response.data.knowledgeList)
	            	this.items = response.data
	        },response=>{
	        	//console.log(response);
	        }).then(response=>{
	        	console.log(response);
	        }).catch((err) => console.log(err.data))*/
	        /*2.*/
	        let resource = this.$resource(this.todosUrl)
	        let _this = this
	        resource.get()
		        .then((response) => {
		            _this.items = response.data
		            //this.$message('获取成功')
		        })
		        .catch(function(response) {
		            console.log(response)
		        })

		},
		deleteItem(index){
			this.items.splice(index, 1)
		},
		completed(index){
			this.items[index].complete = !this.items[index].complete;
		},
		addItem(){
			this.items.push({...this.newItem});
			this.newItem = createItem();
		},
		searchItem(name){
			if(name == 'finished'){
				this.items = items.filter(item=>!item.complete)
			}else if(name == 'unfinished'){
				this.items = items.filter(item=>item.complete)
			}else{
				this.getTodoList()
			}
		},
		getChildMessage(title){
			this.title=title;
		}
	}
}

const createItem = () =>({
	id: 0,
	language: '',
	commont: '',
	complete: false
})
</script>

<style>
	.complete{
		text-decoration: line-through;
	}
	a{
		text-decoration:underline;
		color:blue;
		cursor: pointer;
	}
	a:hover{
		color:red;
	}
	a:visited{
		color:black;
	}
</style>