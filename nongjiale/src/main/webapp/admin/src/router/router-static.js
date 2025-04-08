import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import dictionary from '@/views/modules/dictionary/list'
        import fangjan from '@/views/modules/fangjan/list'
        import fangjanCollection from '@/views/modules/fangjanCollection/list'
        import fangjanCommentback from '@/views/modules/fangjanCommentback/list'
        import fangjanOrder from '@/views/modules/fangjanOrder/list'
        import fangjianfuwu from '@/views/modules/fangjianfuwu/list'
        import news from '@/views/modules/news/list'
        import shangjia from '@/views/modules/shangjia/list'
        import yonghu from '@/views/modules/yonghu/list'
        import config from '@/views/modules/config/list'
        import dictionaryFangjan from '@/views/modules/dictionaryFangjan/list'
        import dictionaryFangjanCollection from '@/views/modules/dictionaryFangjanCollection/list'
        import dictionaryFangjanOrder from '@/views/modules/dictionaryFangjanOrder/list'
        import dictionaryFangjanOrderPayment from '@/views/modules/dictionaryFangjanOrderPayment/list'
        import dictionaryFangjianfuwu from '@/views/modules/dictionaryFangjianfuwu/list'
        import dictionaryNews from '@/views/modules/dictionaryNews/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryFangjan',
        name: '房间类型名称',
        component: dictionaryFangjan
    }
    ,{
        path: '/dictionaryFangjanCollection',
        name: '收藏表类型',
        component: dictionaryFangjanCollection
    }
    ,{
        path: '/dictionaryFangjanOrder',
        name: '订单类型名称',
        component: dictionaryFangjanOrder
    }
    ,{
        path: '/dictionaryFangjanOrderPayment',
        name: '支付方式',
        component: dictionaryFangjanOrderPayment
    }
    ,{
        path: '/dictionaryFangjianfuwu',
        name: '服务类型名称',
        component: dictionaryFangjianfuwu
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型名称',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/fangjan',
        name: '房间信息',
        component: fangjan
      }
    ,{
        path: '/fangjanCollection',
        name: '房间收藏',
        component: fangjanCollection
      }
    ,{
        path: '/fangjanCommentback',
        name: '房间评论',
        component: fangjanCommentback
      }
    ,{
        path: '/fangjanOrder',
        name: '房间订单',
        component: fangjanOrder
      }
    ,{
        path: '/fangjianfuwu',
        name: '房间服务',
        component: fangjianfuwu
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/shangjia',
        name: '商家',
        component: shangjia
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
