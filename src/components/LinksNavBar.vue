<template>
    <div>
  <div style="position: fixed;width: 100%;z-index: 900;">
    <router-view/>
    <v-bottom-navigation :elevation="1" style="position: relative;">
        
    <router-link  to="/AccountProfile" exact-active-class="active" active-class="active"  class="nav_btn_link" >
        <v-btn value="1" class="nav_btn">
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
        </v-btn>
    </router-link>
    <router-link  to="/Links" exact-active-class="active" active-class="active" class="nav_btn_link" >
        <v-btn value="2"  class="nav_btn">
            <div>
                <i class="fa-solid fa-link"></i>
            </div>
        </v-btn>
    </router-link>

    <!-- <router-link  to="/Design" exact-active-class="active" active-class="active" class="nav_btn_link" >
        <v-btn value="3"  class="nav_btn">
            <div>
                <i class="fa-solid fa-pen-nib"></i>
            </div>
        </v-btn>
    </router-link> -->

    <router-link  to="/Share" exact-active-class="active" active-class="active" class="nav_btn_link" >
        <v-btn value="4"  class="nav_btn">
            <div>
                <i class="fa-solid fa-share-nodes"></i>
            </div>
        </v-btn>
    </router-link>

    <router-link  to="/Preview" exact-active-class="active" active-class="active" class="nav_btn_link" >
        <v-btn value="5"  class="nav_btn">
            <div>
                <i class="fa-solid fa-eye"></i>
            </div>
        </v-btn>
    </router-link>
</v-bottom-navigation>
  </div>
  <div style="height: 60px;"></div>
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

    components: {
    },
  });
</script>

<style>
.active{
    background-color: #f58634;
}
.active .nav_btn{
    color: white;
}
.nav_btn{
    height: 100% !important;
    color: #f58634;
    
}
.active .nav_btn:hover{
    color: white;
}
.nav_btn_link{
    color: #f58634;
}
.nav_btn_link:hover{
    color: #f58634;
}
</style>