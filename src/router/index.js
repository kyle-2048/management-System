import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//   const routes = [
//
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
// })
//
// export default router

export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    {
      path:'/Login',
      component:() => import ('../views/Login/Login')
    },

    {
      path:'/',
      redirect:'/yemian/shouye'
    },
    {
      path:'/yemian',
      component:()=>import ('../views/houtai/yemian'),
      children:[
        {
          path:'shouye',
          component:()=>import('../views/houtai/shouye/shouye')
        },
        {
          path:'yindao',
          component:()=>import('../components/YinDao')
        },
        {
          path:'quanxian',
          component:()=>import('../components/Quanxian')
        },
        {
          path:'quanxian/userPage',
          component:()=>import('../components/Quanxian/userPage')
        },
        {
          path:'quanxian/managerPage',
          component:()=>import('../components/Quanxian/managerPage')
        },
        {
          path:'quanxian/accessSet' ,
          component:()=>import('../components/Quanxian/accessSet')
        },
        {
          path:'Table/normal' ,
          component:()=>import('../components/Table/normal')
        },
        {
          path:'Table/complex',
          component:()=>import('../components/Table/complex')
        },
        {
          path:'Icon',
          component:()=>import('../components/Icon/Icon')
        },
        {
          path:'bufenzujian/uploadPic',
          component:()=>import('../components/bufenzujian/uploadPic')
        },
        {
          path:'404',
          component:()=>import('../components/404')
        },
        {
          path:'/Center',
          component:()=>import('../views/houtai/myCenter')
        },
      ]
    },

  ]
})
//解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
