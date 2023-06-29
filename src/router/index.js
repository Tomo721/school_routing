import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/ViewLayout.vue'
import Dinamic from '../views/ViewDynamic.vue'
import User from '../views/ViewUser.vue'
import Slots from '../views/ViewSlots.vue'
import NotFound from '../views/ViewNotFound.vue'

// маршруты которые используются перемещены в папку views и переименнованы соответственно
// чтобы было разделение страницы отдельно, компоненты отдельно

// также из страницы Slots была удалена навигация,
// и сама страница Slots теперь в дочерних маршрутах Layout

Vue.use(VueRouter)

const routes = [
  {
    path: '/dinamic',
    name: 'LayoutPage',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dinamic',
        component: Dinamic,
        // beforeEnter: Function
      },
      {
        path: ':id',
        name: 'UserDetail',
        component: User,
        props: true
      },
      {
        path: '/slots',
        name: 'Slots',
        component: Slots
      }
    ]
  },
  {
    path: '/',
    redirect: {name: 'Dinamic'}
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
 
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// let isAuth = true

// router.beforeEach((to, from, next) => {
//   if(!isAuth) {
//     console.log('beforeEach пользователь не авторизова')
//   } else {
//     next()
//   }
// })

export default router
