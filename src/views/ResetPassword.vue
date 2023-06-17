<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris_teknoloji.png')" />
      <div class="body">
          <div class="bord">
              <div class="bord-header">
                  <h5>New password</h5>
              </div>
              <div class="bord-body">
                  <div class="input">
                    <v-text-field
                          v-model="password_re"
                          :type="show1 ? 'text' : 'password'"
                          color="#f58634"
                          label="Password"
                          variant="underlined"
                          @click:append="show1 = !show1"
                          :append-icon="show1 ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye' "
                          :rules="[rules.required]"
                          name="input-10-1"
                      ></v-text-field>
                  </div>
                  <div class="input">
                      <v-text-field
                          v-model="password"
                          :type="show2 ? 'text' : 'password'"
                          color="#f58634"
                          label="confirm your pass"
                          variant="underlined"
                          @click:append="show2 = !show2"
                          :append-icon="show2 ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye' "
                          :rules="[rules.required]"
                          name="input-10-1"
                      ></v-text-field>
                  </div>

                  <div class="mt-3">
                  <v-btn v-if="!login_sppiner" id="sign-up-btn"  @click="sign_up()"  prepend-icon="fa-solid fa-floppy-disk" variant="tonal">
                      Save
                  </v-btn>
                  <div v-else class="d-flex justify-content-center align-items-center">
                      <div  class="sppiner"></div>
                  </div>
                  </div>
              </div>
          </div>
      </div>
      <Foter/>


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
      name: 'HomePage',
      data: () => ({
          backgroundColor:'background-color:#252525',
          login_sppiner:false,
          email:'',
          password:'',
          password_re:'',
          show2: false,
          show1: false,
          response_message:'',
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
            email: value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
            },
          },
      }),
      methods:{
        validations(){
            var valid = true 
            if(this.password <= 0 || this.password_re <= 0 ){
                valid = false
            }
            if(this.password !== this.password_re){
                valid = false
            }
            return valid
        },
          sign_up(){
            if(this.validations()){
                var payload = {
                    password:this.password,
                    token:this.$route.params.token
                }
                console.log(payload)
                this.login_sppiner = true
                _axios
                setTimeout(function(){
                    _axios.post('/api/reset_pass',payload)
                    .then(response => {
                        console.log(response)
                        window.localStorage['token'] = response.data.token
                        this.login_sppiner = false
                        this.$router.push({ name: 'AccountProfile' })
                    })
                    .catch(error => {
                        this.response_message = error.response.data.detail
                        this.login_sppiner = false
                    });
                }.bind(this), 1000);
            }
          },
      },
      beforeCreate(){
        var payload=  {token:this.$route.params.token}
        _axios.post('/api/check_reset',payload)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        error
                        this.$router.push({ name: 'NotFoundd' })
                    });
    },

      watch: {
  
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
  