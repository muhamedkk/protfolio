<template>
  <div>
    <NavBar />
    <Header :backgroundColor="backgroundColor"  :image-src="require('../assets/images/logos/paris_teknoloji.png')" />
    <div class="body">
        <div class="bord">
            <div class="bord-header">
                <h5>SIGN UP</h5>
            </div>
            <div class="bord-body">
                <div class="input">
                    <v-text-field
                        v-model="link"
                        :rules="[rules.required]"
                        color="#f58634"
                        label="Link"
                        variant="underlined"
                        hint="At least 8 characters"
                    ></v-text-field>
                </div>
                <div class="input">
                    <v-text-field
                        v-model="prfile_name"
                        :rules="[rules.required]"
                        color="#f58634"
                        label="Profile Name"
                        variant="underlined"
                    ></v-text-field>
                </div>
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
                <div class="input" id="re_pass">
                    <v-text-field
                        v-model="re_password"
                        :type="show3 ? 'text' : 'password'"
                        color="#f58634"
                        label="Conferm Your Password"
                        variant="underlined"
                        @click:append="show3 = !show3"
                        :append-icon="show3 ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye' "
                        :rules="[rules.required]"
                        name="input-10-1"
                    ></v-text-field>
                </div>
                <div class="mt-5">
                <v-btn id="sign-up-btn" v-if="!this.signub_sppiner"  @click="sign_up()"  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                    Sign Up
                </v-btn>
                <div v-else class="d-flex justify-content-center align-items-center">
                      <div  class="sppiner"></div>
                  </div>
                </div>
                <div class="text-center mt-3">
                    <a style="color: #f58634;cursor:pointer;"  @click="this.$router.push({ name: 'SignIn' })">Already have an account? Sign in</a>
                </div>
            </div>
        </div>
    </div>
    <Foter/>

<button type="button" id="sign_up_modal" hidden data-bs-toggle="modal" data-bs-target="#sign-up-modal">
</button>
<!-- Modal -->
<div class="modal fade" id="sign-up-modal" tabindex="-1"  aria-hidden="true">
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

<button type="button" id="sign_up" hidden data-bs-toggle="modal" data-bs-target="#sign-up">
</button>
<!-- Modal -->
<div class="modal fade" id="sign-up" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="d-flex justify-content-center align-items-center p-3 pt-4">
        <i style="color: green;font-size: 50px;" class="fa-solid fa-circle-check response-icon-true"></i>
    </div>
      <div class="modal-body py-2 text-center">
        {{response_message}}
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <v-btn @click="this.$router.push({ name: 'SignIn' })" class='primary-button' style="width: 100%;" data-bs-dismiss="modal"  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                    Done
        </v-btn>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

 <script>
  import { defineComponent } from 'vue';
  /* eslint-disable */  import functions from  "../assets/js/js.js";
  import _axios from '../axios'
  import NavBar from '../components/NavBar.vue';
  import Header from '../components/Header.vue';
  import Foter from '../components/Foter.vue';
  
  export default defineComponent({
    name: 'HomePage',
    data: () => ({
        backgroundColor:'background-color:#252525',
        image:'../assets/images/logos/paris_teknoloji.png',
        prfile_name:'',
        link:'',
        email:'',
        password:'',
        re_password:'',
        response_message:'',
        signub_sppiner:false,
        show1: true,
        show2: false,
        show3: false,
        show4: true,
        // password: 'Password',
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
            if(this.prfile_name.length <= 0 || this.link <= 0 || this.email <= 0 || this.password <= 0 || this.re_password <= 0  ){
                valid = false
            }
            if( !this.email.includes('@') ){
                console.log("email invalid")
                valid = false
            }
            if(this.re_password !== this.password){
                functions.get_valid_message('re_pass','conferm password not like password','rgb(176,0,32)')
                valid = false
            }
            return valid
        },
        sign_up(){
            var _link = this.link = this.link.trim().replace(/\s+/g,'-')
            console.log(this.validations())
            if(this.validations()){
                this.signub_sppiner = true
                var payload = {
                    name:this.prfile_name,
                    link_name:_link.toLowerCase(),
                    email:this.email,
                    password:this.password,
                    is_active:true,
                }
                setTimeout(function(){
                    _axios.post('/api/sign_up',payload)
                    .then(response => {
                        this.response_message = 'Sended Email To Activate'
                        document.getElementById('sign_up').click()
                        this.signub_sppiner = false
                        // window.localStorage['token'] = response.data.token
                        // this.$router.push({ name: 'AccountProfile' })
                    })
                    .catch(error => {
                        console.error(error.response.data);
                        this.response_message = error.response.data.detail
                        document.getElementById('sign_up_modal').click()
                        this.signub_sppiner = false
                    });
                }.bind(this), 1000);
            }
        }
    },
    watch: {
        link:function(value){
            this.prfile_name = value
        }
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

<style>
.v-field__input{
    color: #252525 !important;
}
#sign-up-btn{
    width: 100%;
    background-color: #f58634 !important;
    color: white !important;
}
</style>