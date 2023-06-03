<template   >


    <v-layout style="position: fixed !important,top:0;width: 100%;">
        <v-navigation-drawer
        style="z-index: 1010;position: fixed !important;top:0;"
        v-model="this.$store.state.nav_bar"
        temporary
        >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider"
            ></v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="fa-solid fa-user-plus" title="Sign Up" value="2" class="navbar_btn"  @click="this.$router.push({ name: 'SignUp' })"></v-list-item>
                <v-list-item  prepend-icon="fa-solid fa-arrow-right-to-bracket" title="Sign In" value="1"  class="navbar_btn"  @click="this.$router.push({ name: 'SignIn' })"></v-list-item>
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
 
      }
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
}
</style>



