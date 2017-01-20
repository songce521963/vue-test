import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress' //页面顶部进度条
import 'nprogress/nprogress.css'

Vue.use(VueRouter);

Object.keys(routes).forEach(key => {
	routes[key].path = '/:lang'+routes[key].path
})


const router = new VueRouter({
    mode: 'history',
    routes
})

NProgress.configure({ ease: 'ease', speed: 500 });

router.beforeEach((to, from, next) => {
	to.params.lang = Vue.config.lang
    NProgress.start();
    next()
})

router.afterEach(transition => {
    NProgress.done();
});

export default router;
