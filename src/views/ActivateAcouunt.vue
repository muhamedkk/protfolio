<template>
    <div>
      <!-- <NavBar />
      <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris_teknoloji.png')" />
      <div class="body d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <v-btn  class='primary-button' style="width: 250px;"  @click="active()"  prepend-icon="fa-solid fa-bookmark" variant="tonal">
                    Active My Acouunt
            </v-btn>
          </div>
      </div>
      <Foter/>
 -->

    </div>
  </template>
  
   <script>
    import { defineComponent } from 'vue';
    import _axios from '../axios'
    // Components
    // import NavBar from '../components/NavBar.vue';
    // import Header from '../components/Header.vue';
    // import Foter from '../components/Foter.vue';
    
    export default defineComponent({
      name: 'HomePage',
      data: () => ({
          backgroundColor:'background-color:#252525',

      }),
      methods:{
        active(){

          },
      },
      watch: {
  
      },
      beforeCreate(){
        var payload =  {token:this.$route.params.token}
                this.login_sppiner = true
                setTimeout(function(){
                    _axios.post('/api/activate ',payload)
                    .then(response => {
                        window.localStorage['token'] = response.data.token
                        this.$router.push({ name: 'AccountProfile' })
                    })
                    .catch(error => {
                        error
                        this.$router.push({ name: 'NotFoundd' })
                    });
                }.bind(this), 1000);
      },
      components: {
    //   NavBar,
    //   Header,
    //   Foter,
      },
    });
    </script>
  
  <style scoped>
  .body{
      padding: 32px;
      background-color: white;
      height: calc(100vh - (64px + 75px));
      display: flex;
      align-items: center;
  }
  .bord{
      width: 510px;
      background-color: white;
      margin: auto;
      border-radius: 7px;
      box-shadow: 1px 1px 5px 0px rgba(000, 000, 000, 0.1);
      /* height: 700px; */
  }
  .bord-header{
      display: flex;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.225);
  }
  .bord-body{
      padding: 16px;
  }
  .v-field__input{
      color: #252525 !important;
  }
  
  </style>
  