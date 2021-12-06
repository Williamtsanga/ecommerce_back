import Vue from 'vue';
import Router from 'vue-router';

import store from "@/store"
// import axios from 'axios'
// axios.defaults.baseURL = "/api/admin/"

// import Layout from '@/components/Layout/Layout';
import Typography from '@/pages/Typography/Typography';
import Tables from '@/pages/Tables/Tables';
import Notifications from '@/pages/Notifications/Notifications';
import Icons from '@/pages/Icons/Icons';
import Maps from '@/pages/Maps/Maps';
import Charts from '@/pages/Charts/Charts';
import Products from '@/pages/Products/AddProducts'
import ProductsList from '@/pages/Products/List'
// import Dashboard from '@/pages/Visits/Visits';
// import Login from '@/pages/Login/Login';
// import ErrorPage from '@/pages/Error/Error';

Vue.use(Router);

 
  const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: import('@/pages/Login/Login'),
    },
    {
      path: '/error',
      name: 'Error',
      component: import ('@/pages/Error/Error'),
    },
    {
      path: '/',
      name: 'Layout',
      component: import ('@/components/Layout/Layout'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: import('@/pages/Visits/Visits'),
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography,
        },
        {
          path: 'tables',
          name: 'Typography',
          component: Tables,
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications,
        },
        {
          path: 'components/icons',
          name: 'Icons',
          component: Icons,
        },
        {
          path: 'components/maps',
          name: 'Maps',
          component: Maps,
        },
        {
          path: 'components/charts',
          name: 'Charts',
          component: Charts,
        },
        {
          path: 'ecommerce/addproducts',
          name: 'Products',
          component: Products,
        },
        {
          path: 'ecommerce/products',
          name: 'ProductsList',
          component: ProductsList,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: import ('@/pages/Error/Error'),
    }
  ],
});

router.beforeEach(async (to,from,next)  =>  {
  const {state,isAuthenticated} = store.getters['user/isAuth']
  // store.dispatch('user/')
  console.log(state,isAuthenticated,from,to)
  if(state && isAuthenticated){
    // console.log('first if')
    if(to.path === "/login" || to.path === '/'){
      next('/dashboard')
    }
    else
      next()
      // console.log('if')
  }
  else if (!state) {
    // console.log("else if")
    await Vue.axios.get('view-profile').then(
      ({data}) => {
        // console.log('good')
        store.commit('user/authenticate',{user:data.user,message:data.message,val:true,})
        if((from.path === '/' && to.path === '/') || to.path === '/login' )
            next('/dashboard')
        else
          next()
      },
      (err) => {
        // console.log('bad')
        store.commit('user/authenticate',{user:null,message:err.response.data.message,val:false})
        next('login')
    }
    )
  }
  else {
    console.log("no no")
    next()
  }

})


export default router