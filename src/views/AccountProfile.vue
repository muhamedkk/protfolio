<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" />
      <LinksNavBar/>
      <div class="body">
        <div class="section-one">
            <div class="my-photo">
                <div class="photo">
                    <img :src="require('../assets/images/myp.jpg')"  alt=""  @click="this.$router.push({ name: 'HomePage' })">
                    <div class="add-photo-btn">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                </div>
            </div>
            <div class="name-link">
                <h3>Muhamed karzoun</h3>
                <a href="">unit.link/muhamed-karzoun</a>
            </div>
        </div>
        <div class="section-tow mt-5">
            <div>
                <div class="box-info">
                <h6>Profile name</h6>
                <hr>
                <p>muhamed karzoun</p>
                <v-btn class="edit-btn"  @click="this.$router.push({ name: 'SignUp' })"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Profile name</h6>
                <hr>
                <p>muhamed karzoun</p>
                <v-btn class="edit-btn"  @click="this.$router.push({ name: 'SignUp' })"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Profile name</h6>
                <hr>
                <p>muhamed karzoun</p>
                <v-btn class="edit-btn"  @click="this.$router.push({ name: 'SignUp' })"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Profile name</h6>
                <hr>
                <p>muhamed karzoun</p>
                <v-btn class="edit-btn"  @click="this.$router.push({ name: 'SignUp' })"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal">
                    Edit
                </v-btn>
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
    import LinksNavBar from '../components/LinksNavBar.vue';
    
    export default defineComponent({
      name: 'AccountProfile',
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
      created(){

      }
    });
    </script>
  
  <style scoped>
  .body{
    background-color: #f6f6f6;
  }
.my-photo{
    display: flex;
    justify-content: center;
    padding: 32px;
 }
 .photo{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 1px 1px 5px 0px rgba(000, 000, 000, 0.1);
    position: relative;
 }
 .photo img{
    width: 100%;
    width: 100%;
    border-radius: 50%;

 }
  .add-photo-btn{
    cursor:pointer;
    background-color: #f58634;
    opacity: 0.5;
    width:40%;
    height:40%;
    border-radius: 50%;
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .add-photo-btn:hover{
    opacity: 0.7;
    width:50%;
    height:50%;
  }
  .add-photo-btn i::before{
    opacity: 0.7;
    font-size:medium;
    transition: 0.2s;
  }
  .add-photo-btn:hover i::before{
    font-size: larger;
  }
  .name-link{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .name-link h3{
    font-weight: 500;
    font-size: xx-large;
  }
  .name-link a{
    color: #f58634;
    font-size: larger;
  }
 .edit-btn{
    background-color: #f58634 !important;
    color: white !important;
    width: 125px !important;
}
.section-tow{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
}
.section-tow div {
padding: 16px;
}
.section-tow div .box-info{
    margin: auto;
    background-color: white;
    max-width: 500px;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    box-shadow: 1px 1px 5px 0px rgba(000, 000, 000, 0.1);
    border-radius:4px ;
    padding: 16px;
}
  </style>
  