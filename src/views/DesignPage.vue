<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris teknoloji.png')" />
      <LinksNavBar/>
      <div class="body">
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
    import LinksNavBar from '../components/LinksNavBar.vue';
    
    export default defineComponent({
      name: 'DesignPage',
      data: () => ({
          backgroundColor:'background-color:#ffffff',

      }),
      methods:{

      },
      watch: {
  
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
 
  
  </style>