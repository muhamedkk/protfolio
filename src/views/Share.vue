<template>
  <div>
    <NavBar />
    <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris teknoloji.png')" />
    <LinksNavBar/>
    <div class="body">
      <div class="box">
          <div class="box-titel">
              <h5>My link to share</h5>
          </div>
          <div class="qr-code">
              <img :src="qr_link" alt="">
          </div>
          <div class="link">
              <p id="linke">parisajans.link/{{this.$store.state.user_informations.link_name}}</p>
          </div>
          <div class='copy-link'>
              <v-btn v-if="!this.coped"  @click="copyLink()" class='primary-button' style="width: 100%;"    prepend-icon="fa-solid fa-clone" variant="tonal">
                  copy my link
              </v-btn>
              <v-btn v-else-if="this.coped"  class='bg-success' style="width: 100%;"   prepend-icon="fa-solid fa-check" variant="tonal">
                  copide
              </v-btn>
          </div>
      </div>
    </div>
    <Foter/>
  </div>
</template>

 <script>
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';
  // Components
  import NavBar from '../components/NavBar.vue';
  import Header from '../components/Header.vue';
  import Foter from '../components/Foter.vue';
  import LinksNavBar from '../components/LinksNavBar.vue';
  
  export default defineComponent({
    name: 'ShaerPage',
    data: () => ({
        backgroundColor:'background-color:#ffffff',
        coped:false
    }),
    methods:{
     async copyLink(){
        var linke = document.getElementById('linke').innerText
        console.log(linke)
        // navigator.clipboard.writeText('linke')
          try {
          await navigator.clipboard.writeText(linke);
          } catch (e) {
          console.log(e);
          }
        
        // document.execCommand('copy');
        this.coped = true
        setTimeout( () => {
          this.coped = false
        },1000 )
          
      }
    },
    watch: {

    },
    computed:{
      ...mapGetters(['qr_link'])
    },
    created(){
      this.$store.dispatch('user_info')
      // navigator.clipboard.writeText('sss')
  },
    components: {
    NavBar,
    Header,
    Foter,
    LinksNavBar,
    },
  });
  </script>
<style scoped>
.body{
  min-height: calc(100vh - (64px + 56px + 57px));
  background-color: #f6f6f6 ;
  padding: 32px;
}
.box{
  margin: auto;
  max-width:480px ;
  background-color: white;
  border-radius:  4px;
  box-shadow:0px 0px 5px 3px rgba(0, 0, 0, 0.075);
}
.box-titel{
  padding: 16px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.100);
}
.qr-code{
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  margin: auto;
}
.qr-code img{
  width: 100%;
  height: 100%;
}
.link{
  padding: 8px;
  text-align: center;

}
.link p{
  font-size: 20px;
  margin: 0;
}
.copy-link{
  padding: 16px;
}
@media only screen and (max-width: 425px){
  .link p{
  font-size: 15px;
}
}
</style>

