import Vue from 'vue';
// import axios from 'axios'
// axios.defaults.baseURL = "/api/admin/"
export default {
    namespaced: true,
    state: {
      isAuthenticated: false,
      user: null,
      message: '',
      state:false,
    },
    getters: {
        isAuth: state => {
            return {...state}
        },
    },
    mutations: {
        authenticate(state,{user,message,val}) {
            if (user){
                state.user = user
                state.state = true
                state.message = message
                state.isAuthenticated = val
            } else{
                state.state = true
                state.user = user
                state.message = message
                state.isAuthenticated = val
            }
            // state.isAuthenticated = !this.isAuthenticated
        },
    },
    actions: {
         switchAuth: async ({ commit }) => {
            await Vue.axios.get('view-profile').then(
                ({data}) => {
                    commit('authenticate',{user:data.user,message:data.message,val:true})
                },
                (err) => {
                    commit('authenticate',{user:null,message:err.response.data.message || 'error',val:false})
            }
            )

        },
    },
    
};
  