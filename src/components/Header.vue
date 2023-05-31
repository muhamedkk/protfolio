<template>
<div>
    <v-app-bar id="header" :elevation="3" style="position: fixed;" :style="backgroundColor">
        <v-btn  icon="fa-solid fa-user"  @click=" this.$store.state.nav_bar =!this.$store.state.nav_bar"  id="header-user-icon" size="small"></v-btn>
        <template v-slot:append >
            <div class="">
                <img :src="require('../assets/images/logos/paris_teknoloji.png')" height="65" alt="">
            </div>
        </template>
    </v-app-bar>
    <div style="height: 77px;">

    </div>
</div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    data () {
      return {

      }
    },
    props: {
        backgroundColor: String
    },
    components: {
    //   HelloWorld,
    },
  });
</script>
  
<style>


#header-user-icon{
   background-color: #f58634;
   color:white;
   margin: 0 !important;

}
.v-toolbar__content{
height: 77px !important;
padding: 0 32px;

}
.v-toolbar__append{
    margin-right: 0 !important;
}
</style>

<style  scoped>


</style>

