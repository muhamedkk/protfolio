<template>
    <div>
      <NavBar />
      <Header :backgroundColor="'background-color:#252525'" :image-src="require('../assets/images/logos/paris_teknoloji.png')" />
      <div class="body">
          <div class="bord">
            <table class="table">
  <thead>
    <tr>
      <th scope="col" style="width: 5%;">#</th>
      <th scope="col" style="width: 20%;">Name</th>
      <th scope="col" style="width: 20%;">Link</th>
      <th scope="col" style="width: 20%;">Email</th>
      <th scope="col" style="width: 20%;">is_active</th>
      <th scope="col" style="width: 5%;">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,i) in data" :key="i">
      <th  scope="row">{{i +1}}</th>
      <td>{{user.name}}</td>
      <td><a :href="`https://parisajans.link/${user.link_name}`" target="_blank" style="color:#f58634">{{user.link_name}}</a></td>
      <td>{{user.email}}</td>
      <td>{{user.is_active}}</td>
      <td><i style="cursor:pointer;color: red;" class="fa-solid fa-trash" @click="this.user_delete = user.id " data-bs-toggle="modal" data-bs-target="#delete_user" ></i></td>
    </tr>
  </tbody>
    </table>
            <div class="d-flex justify-content-center align-items-center gap-3">
                <nav aria-label="Page navigation example " >
                    <ul class="pagination m-0">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous" v-if="userQueryPage - 1 !== 0" @click="get_users(userQueryPage - 1 )">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#" v-if="userQueryPage - 1 !== 0" @click="get_users(1 )">{{1 }}</a></li>
                        <li class="page-item active"><a class="page-link" href="#" @click="get_users(userQueryPage  )">{{pagination}}</a></li>
                        <li class="page-item"><a class="page-link" href="#" v-if="userQueryPage !== _pages  " @click="get_users(pages )">{{pages}}</a></li>
                        <!-- <li class="page-item"><a class="page-link" href="#" v-if="userQueryPage !== _pages  " @click="get_users(pages )">{{pages}}</a></li> -->
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next" v-if="userQueryPage !== _pages " @click="get_users(userQueryPage + 1 )">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
                <h6 class="m-0" style="color:#f58634">
                    Total Users = {{ total_users }}
                </h6>
                <!-- {{ _pages }} -->
            </div>
          </div>
      </div>
    <Foter/>

<div class="modal fade" id="delete_user" tabindex="-1"  aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
      <div class="d-flex justify-content-center align-items-center p-3 pt-4">

          <i class="fa-solid fa-trash response-icon-erorr"></i> 
      </div>
      <div class="modal-body pb-3 text-center">
        Do you really want to delete this user?
    </div>
    <div class="modal-footer">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      
      <v-btn @click="delete_user()" class='primary-button' style="width:40%;background-color: red !important;" data-bs-dismiss="modal"  variant="tonal">
          Delete
      </v-btn>
      <v-btn  class='primary-button' style="width:40%;" data-bs-dismiss="modal"  variant="tonal">
          No
      </v-btn>
    </div>
  </div>
</div>
</div>

    </div>
  </template>
  
   <script>
    import { defineComponent } from 'vue';
    import _axios from '../axios'
    // Components
    import NavBar from '../components/NavBar.vue';
    import Header from '../components/Header.vue';
    import Foter from '../components/Foter.vue';
    
    
    export default defineComponent({
      name: 'DashbordPage',
      data: () => ({
        userQueryPage:1,
        pages:1,
        total_users:1,
        data:{},
        user_delete:''
      }),
      methods:{
        get_users(page){
            console.log(page)
            var payload = {'page':page}
        _axios.post(`/api/get_users`,payload,{ headers: {
        'Authorization': `token ${window.localStorage.token}`}
      })
      .then( response => {
        console.log()
        this.data =  response.data.users
        this.userQueryPage = response.data.offset
        this.pages = response.data.pages
        this.total_users = response.data.total_users

    })
        .catch( ()=>{
            this.$router.push({ name: 'NotFoundd' })
            } )
        },
      
        delete_user(){
            console.log(this.user_delete)
          _axios.delete(`/api/delete_user/${this.user_delete}`,{ headers: {
        'Authorization': `token ${window.localStorage.token}`}
      }).then( ()=>{
        this.get_users(1)
      } )

        }
      },
      watch: {
  
      },
      mounted(){
        try{
            document.querySelector('.mdi-chevron-left.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default').setAttribute('class','fa-solid fa-chevron-left')
            document.querySelector('.mdi-chevron-right.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default').setAttribute('class','fa-solid fa-chevron-right')
        }catch{
            console.log()
        }
      },
      created(){
        this.get_users(1)
      },
      computed:{
        pagination(){
            return this.userQueryPage
        },
        _pages(){
            return this.pages
        },
      },

      components: {
      NavBar,
      Header,
      Foter,
      },
    });
    </script>
  
  <style scoped>
  .body{
      padding: 32px;
      background-color: #f58634;
      min-height: calc(100vh - (64px + 75px));
      display: flex;
      /* align-items: center; */
  }
  .bord{
      width: 100%;
      background-color: white;
      padding: 8px;
      margin: auto;
      border-radius: 3px;
      box-shadow: 1px 1px 5px 0px rgba(000, 000, 000, 0.1);
    }
    
  </style>
  