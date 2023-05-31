<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" />
      <div class="body">
          <div class="bord">
              <div class="bord-header">
                  <h5>SIGN In</h5>
              </div>
              <div class="bord-body">
                  <div class="input">
                      <v-text-field
                          v-model="email"
                          color="#f58634"
                          label="Email"
                          variant="underlined"
                          :rules="[rules.email]"
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
                          :rules="[rules.required, rules.min]"
                          hint="At least 8 characters"
                          name="input-10-1"
                      ></v-text-field>
                  </div>

                  <div class="mt-5">
                  <v-btn id="sign-up-btn"  @click="this.$router.push({ name: 'SignUp' }),val()"  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                      Sign In
                  </v-btn>
                  </div>
                  <div class="text-center mt-3">
                      <a style="color: #f58634;"  @click="this.$router.push({ name: 'SignUp' })">Already have an account? Sign Up</a>
                  </div>
              </div>
          </div>
      </div>
      <Foter/>
    </div>
  </template>
  
   <script>
    import { defineComponent } from 'vue';
    
    // Components
    import NavBar from '../components/NavBar.vue';
    import Header from '../components/Header.vue';
    import Foter from '../components/Foter.vue';
    
    export default defineComponent({
      name: 'HomePage',
      data: () => ({
          backgroundColor:'background-color:#252525',
          email:'',
          password:'',
          show3: false,
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
          val(){
              var v = document.getElementById('input-14-messages')
              v.innerText='coustom validation'
              v.style.color='#B00020'
              v.style.opacity=1
          }
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
  