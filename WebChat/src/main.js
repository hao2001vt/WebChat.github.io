import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Main'
import Profile from './components/Profile/ProfileHome'
const routes = [
  { path: '/', 
    component: Home 

  },
  { path: '/profile', 
    component: Profile 

  },
  { path: '/register', 
    component: Register 

  },
  { path: '/login', 
    component: Login 
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


