import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  }
  , {
    path: '/login',
    name: 'login',

    component: () => import('@/views/login/Login.vue')
  }
  , {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue'),
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/main/user/User.vue'),
      }
      , {
        path: 'role',
        name: 'role',
        component: () => import('@/views/main/role/Role.vue'),
      }
      , {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/main/menu/Menu.vue'),
      }
      , {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/main/goods/Goods.vue'),
      }
    ]
  }
  , {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

//导航守卫
router.beforeEach((to) => {


})

export default router
