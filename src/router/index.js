// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter);

const routes = [
  // 在这里定义你的路由映射关系
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/loginPages/index.vue')
  
  },
  {
    path: '/register',
    name:'register',
    component: () => import ('@/pages/registerPages/index.vue')
  },
  {
    path: '/userhome',
    name: 'userhome',
    component:()=>import ('@/pages/userPages/orgin.vue'),
    children:[
      {
        path: 'carbonMap',
        name:'carbonMap',
        component:()=>import('@/components/userCompontent/carbonMap/index.vue')
      },
      {
        path: 'carbonSink',
        name:'carbonSink',
        component: () => import ('@/components/userCompontent/carbonSink/index.vue')
      },
      {
        path: 'calculate',
        name:'calculate',
        component: () => import ('@/components/userCompontent/calculate/index.vue')
      },
      {
        path: "carbonGraph", 
        name: "carbonGraph",
        component: () => import ("@/components/userCompontent/carbonGraph/index.vue")
      },
      {
        path: 'xtree',
        name:"xtree",
        component: () => import ("@/components/userCompontent/Xtree/index.vue")
      },
      {
        path: "knowledgeGraph",
        name: "knowledgeGraph",
        component: () => import ("@/components/userCompontent/knowledgeGraph/index.vue")
      },
      {
        path: "cropsGraph",
        name: "cropsGraph",
        component: () => import ("@/components/userCompontent/cropsGraph/index.vue")
      },



      
      {
        path: "catalogue",
        name: "catalogue",
        component: () => import ("@/components/adminComponent/catalogue/index.vue")
      },
      {
          path: "crops",
          name:"crops",
          component: () => import ("@/components/adminComponent/crops/index.vue")
      },
      {
        path: "knowledege",
        name:"knowledege",
        component: () => import ("@/components/adminComponent/knowledege/index.vue")
      },
      {
        path: "carbon",
        name:"carbon",
        component: () => import ("@/components/adminComponent/carbin/index.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import ("@/components/adminComponent/userlist/index.vue")
      }
    ]
  }

  

];

const router = new VueRouter({
  routes
});




export default router;
