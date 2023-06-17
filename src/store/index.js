import { createStore } from 'vuex'
import _axios from '../axios'
import router from '../router'

var host=`http://localhost:8000/`
var photo_path='img/'

export default createStore({
  state: {
    nav_bar:false,
    user_informations:{},
    user_links:{},
    host:'http://localhost:8000/',
  },
  getters: {
    // active_links: state => state.filters(),
    get_protfolio_link:(state) => {
      try{
        return state.user_links.filter((group) => group.is_active && group.link.length !== 0);
      }
      catch{
        return []
      }
    },
    photo_path: state => `${photo_path}${state.user_informations.photo}`,
    link: state  => `${host}${state.user_informations.link_name}`,
    qr_link: state  => `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${host}${state.user_informations.link_name}`
  },
  mutations: {
    user_info(state,data){
      state.user_informations = data[0]
    }, 
    user_links(state,data){
      state.user_links = data
    }, 
  },
  actions: {
    user_info({commit}){
      return _axios.get('/api/account_profile',{ headers: {
        'Authorization': `token ${window.localStorage.token}`}
      }).then(response => {
        commit('user_info', response.data);
      }).catch(erorr => {
        console.log(erorr)
        window.location.href = `http://localhost:8080/protfolio/SignIn`;
      })
    },
    protifolio({commit},query){
      return _axios.get(`/api/protfolio/${query}`,{ headers: {
        'Authorization': `token ${window.localStorage.token}`}
      }).then(response => {
        if(response.data[0].is_enabled){
          commit('user_info', response.data);
        }else{
          router.push({ name: 'NotFoundd' })
        }
      }).catch(erorr => {
        console.log(router)
        console.log(erorr)
        router.push({ name: 'NotFoundd' })
        // window.location.href = `http://localhost:8080/protfolio/SignIn`;
        // router.push({name:'SignIn'})
      })
    },
    get_links({commit},query){
      return _axios.get(`/api/get_links/${query}`,{ headers: {
      'Authorization': `token ${window.localStorage.token}`}})
          .then((response)=>{
              console.log(response)
              commit('user_links', response.data);
          }).catch( (error) => {
              console.log(error)
          } )
  },
    get_my_links({commit}){
      return _axios.get(`/api/get_my_links`,{ headers: {
      'Authorization': `token ${window.localStorage.token}`}})
          .then((response)=>{
              console.log(response)
              commit('user_links', response.data);
          }).catch( (error) => {
              console.log(error)
          } )
  },
  },
  modules: {
  }
})
