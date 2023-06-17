<template   >


    <v-layout style="position: fixed !important,top:0;width: 100%;">
        <v-navigation-drawer
        style="z-index: 1010;position: fixed !important;top:0;"
        v-model="this.$store.state.nav_bar"
        temporary
        >

        <v-list-item v-if="this.$store.state.user_informations.name"
            :prepend-avatar="this.$store.state.user_informations.photo"
            :title="this.$store.state.user_informations.name"
            ></v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item v-if="!this.$store.state.user_informations.name" prepend-icon="fa-solid fa-user-plus" title="Sign Up" value="2" class="navbar_btn"  @click="this.$router.push({ name: 'SignUp' })"></v-list-item>
                <v-list-item v-if="!this.$store.state.user_informations.name" prepend-icon="fa-solid fa-arrow-right-to-bracket" title="Sign In" value="1"  class="navbar_btn"  @click="sign_in()"></v-list-item>

                <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-user" title="Profile" value="3"  class="navbar_btn"  @click="this.$router.push({ name: 'AccountProfile' })"></v-list-item>
                <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-link" title="Links" value="4"  class="navbar_btn"  @click="this.$router.push({ name: 'Links' })"></v-list-item>
                <!-- <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-pen-nib" title="Sign In" value="1"  class="navbar_btn"  @click="this.$router.push({ name: 'SignIn' })"></v-list-item> -->
                <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-share-nodes" title="Share" value="6"  class="navbar_btn"  @click="this.$router.push({ name: 'Share' })"></v-list-item>
                <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-eye" title="peview" value="7"  class="navbar_btn"  @click="this.$router.push({ name: 'Preview' })"></v-list-item>
                <v-list-item v-if="this.$store.state.user_informations.name" prepend-icon="fa-solid fa-arrow-right-to-bracket" title="LogOut" value="8"  class="navbar_btn"  @click="logout()"></v-list-item>
            </v-list>
        </v-navigation-drawer>

</v-layout>

</template>

<script>

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NavBar',
    data () {
      return {
        UserName:'Muhammed Karzoun',
      }
    },
    methods:{
        sign_in(){
            if(window.localStorage.token){
                this.$router.push({ name: 'AccountProfile' })
            }else{
                this.$router.push({ name: 'SignIn' })
            }
        },
        logout(){
        this.$store.state.user_informations = {}
      this.$router.push({ name: 'HomePage' })
      localStorage.removeItem('token');
    },
    },
    components: {
    //   HelloWorld,
    },
  });
</script>
  
<style>
.mdi::before  {
display: block !important;
font-family: inherit !important;
font-size: inherit !important;
font-weight: inherit !important;
}
.v-navigation-drawer__scrim{
    z-index: 1009 !important;
}
.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--variant-text{
    padding: 10px 10px !important;
}
.v-divider.v-theme--light{
    margin: 10px 0 !important;
}
.navbar_btn .v-list-item__prepend .v-icon{
    color:#f58634 !important;
    opacity: 1;
    font-size: large;
}
</style>



