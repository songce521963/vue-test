import Home from '../components/Home'
import Login from '../components/Login'
import NotFoundComponent from '../components/NotFoundComponent'
import Index from '../components/Index'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'

export default [
/*	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
      		{ path: 'index', component: Index, name: 'Index' },
      		{ path: '/page1', component: Page1, name: 'Page1' }
    	]
	}*/
	{ path: '*', component: NotFoundComponent },
	{ path: '/', component: Index, name: 'index' },
	{ path: '/page1', component: Page1, name: 'page1' },
	{ path: '/page2', component: Page2, name: 'page2' },
	/*{
		path: '/page3',
	    children: [
	        // 当 /user/:id 匹配成功，
	        // UserHome 会被渲染在 User 的 <router-view> 中
	        { path: '', component: page3 ,name: 'page3'},
			{ path: '/:userId', component: page3 ,name: 'page31' },
	        // ...其他子路由
	    ]
	}*/
	{ path: '/page3', component: Page3, name: 'page3' },
	{ path: '/page3/:userId', component: Page3, name: 'page31' },
]