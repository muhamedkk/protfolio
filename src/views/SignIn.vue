<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" />
      <div class="body">
          <div class="bord">
              <div class="bord-header">
                  <h5>Sign In</h5>
              </div>
              <div class="bord-body">
                  <div class="input">
                      <v-text-field
                          v-model="email"
                          color="#f58634"
                          label="Email"
                          variant="underlined"
                          :rules="[rules.email,rules.required]"
                      ></v-text-field>
                  </div>
                  <div class="input">
                      <v-text-field
                          v-model="password"
                          :type="show2 ? 'text' : 'password'"
                          color="#f58634"
                          label="Password"
                          variant="underlined"
                          @click:append="show2 = !show2"
                          :append-icon="show2 ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye' "
                          :rules="[rules.required]"
                          name="input-10-1"
                      ></v-text-field>
                  </div>

                  <div class="mt-5">
                  <v-btn v-if="!login_sppiner" id="sign-up-btn"  @click="sign_up()"  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                      Sign In
                  </v-btn>
                  <div v-else class="d-flex justify-content-center align-items-center">
                      <div  class="sppiner"></div>
                  </div>
                  <hr>
                  </div>
                  <div class="text-center mt-3">
                      <a style="color: #f58634;;cursor:pointer;"  @click="this.$router.push({ name: 'SignUp' })">Already have an account? Sign Up</a>
                  </div>
              </div>
          </div>
      </div>
      <Foter/>

<button type="button" id="sign_in_modal" hidden data-bs-toggle="modal" data-bs-target="#sign-in-modal">
</button>
<!-- Modal -->
<div class="modal fade" id="sign-in-modal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body py-5 text-center">
        {{response_message}}
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <v-btn  class='primary-button' style="width: 100%;" data-bs-dismiss="modal"  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                    Close
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
      name: 'HomePage',
      data: () => ({
          backgroundColor:'background-color:#252525',
          login_sppiner:false,
          email:'',
          password:'',
          show2: false,
          show3: false,
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
            if(this.email <= 0 || this.password <= 0 ){
                valid = false
            }
            if( !this.email.includes('@') ){
                console.log("email invalid")
                valid = false
            }
            return valid
        },
          sign_up(){
            if(this.validations()){
                var payload = {
                    email:this.email,
                    password:this.password,
                }
                this.login_sppiner = true
                setTimeout(function(){
                    _axios.post('/login',payload)
                    .then(response => {
                        window.localStorage['token'] = response.data.token
                        this.login_sppiner = false
                        this.$router.push({ name: 'AccountProfile' })
                    })
                    .catch(error => {
                        this.response_message = error.response.data.detail
                        document.getElementById('sign_in_modal').click()
                        this.login_sppiner = false
                    });
                }.bind(this), 1000);
            }
          },
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
  