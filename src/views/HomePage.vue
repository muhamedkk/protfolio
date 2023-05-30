<template>
    <div  style="width: 100%;">
        <NavBar/>
        <Header/>
        <div class=""  >
           <div class="section-one">
               <v-img
               class="section-one-logo"
               src="../assets/images/logos/paris_teknoloji.png"  
               ></v-img>
               <h1 class="white-color pt-1">One link for all your links</h1>
               <h5 class="white-color pt-1">Create your profile, add your links and share your Paris.Link</h5>
               <a class="white-color pt-1">paris.link/my-name</a>
               <div class="section-one-btns">
                <v-btn  prepend-icon="fa-solid fa-user-plus" variant="tonal">
                    Sign Up
                </v-btn>
                <v-btn prepend-icon="fa-solid fa-arrow-right-to-bracket" variant="outlined">
                    Sign In
                </v-btn>
               </div>
            </div>
            <div class="hero">
             <h2>A simple and easy way to create a landing page for all your links</h2>
             <div class="hero-sections mt-5">
                    <div class="hero-section-one row justify-content-center">
                        <div class="phone-section col-6">
                        <div class="phone ">
                            <div class="phone-header d-flex justify-content-center align-items-center flex-column ">
                                <img class="mb-2" :src="require('../assets/images/logos/paris_teknoloji.png')" height="65" alt="">
                                <h6 class="m-0"><strong>Paris.Link</strong></h6>
                                <p style="font-size:12px;">One Link for all your Links</p>
                            </div>
                            <div class="phone-info_section">
                                <div class="phone-info_section-titel">
                                    <p class="m-0">Paris.Link</p>
                                    <hr class="m-0">
                                </div>
                                <div class="phone-infos">
                                    <div class="phone-info">
                                        <i class="fa-solid fa-link"></i>
                                        <span>Website</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-solid fa-envelope"></i>
                                        <span>Email</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-solid fa-phone"></i>
                                        <span>phone</span>
                                    </div>
                                </div>
                            </div>  
                            <div class="phone-info_section pt-3">
                                <div class="phone-info_section-titel">
                                    <p class="m-0">Social</p>
                                    <hr class="m-0">
                                </div>
                                <div class="phone-infos">
                                    <div class="phone-info">
                                        <i class="fa-brands fa-facebook"></i>
                                        <span>Facebook</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-brands fa-instagram"></i>
                                        <span>Instagram</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-brands fa-twitter"></i>
                                        <span>Twitter</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-brands fa-youtube"></i>
                                        <span>Youtube</span>
                                    </div>
                                    <div class="phone-info">
                                        <i class="fa-brands fa-spotify"></i>
                                        <span>Spotify</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="hero-infos row  col-6">
                        <div class="hero-info col-sm-6 col-md-12">
                            <div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="custom-info-icon">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <span>Your One URL</span>
                                </div>
                                <h5>Access to your profile with your personal address: unit.link/my-name</h5>
                            </div>
                        </div>
                        <div class="hero-info col-sm-6 col-md-12">
                            <div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="custom-info-icon">
                                        <i class="fa-solid fa-link"></i>
                                    </div>
                                    <span>Unlimited links</span>
                                </div>
                                <h5>Create as many links as you want (website, social profile, phone number, email ...).</h5>
                            </div>
                        </div>
                        <div class="hero-info col-sm-6 col-md-12">
                            <div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="custom-info-icon">
                                        <i class="fa-solid fa-bookmark"></i>
                                    </div>
                                    <span>Group of links</span>
                                </div>
                                <h5>Organize your links by group for better visibility.</h5>
                            </div>
                        </div>
                        <div class="hero-info col-sm-6 col-md-12">
                            <div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="custom-info-icon">
                                        <i class="fa-solid fa-pen-nib"></i>
                                    </div>
                                    <span>Custom design</span>
                                </div>
                                <h5>Create a page that reflects your style.</h5>
                            </div>
                        </div>
                        <div class="hero-info col-sm-6 col-md-12">
                            <div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="custom-info-icon">
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                    <span>Share</span>
                                </div>
                                <h5>Easily share your profile with your networks.</h5>
                            </div>
                    </div>
                    </div>
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
     
    }),

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
.section-one{
padding: 16px 16px 8px 16px;
display: flex;
justify-content: center;
align-items: center;
background-color: #252525;
flex-direction: column;
}

.section-one-logo {
    width: 200px !important;
    flex:none ;
}
.section-one h1{
    font-size: 40px !important;
    margin: 0%;
}
.section-one h5{
    font-size: 28px !important;
    margin: 0%;
    font-weight: 400;
}
.section-one a{
    font-size: 24px !important;
    color: #f58634;
}
.section-one-btns  {
    padding: 20px;
    display: flex;
    gap: 20px;
}
.section-one-btns button {
    min-width: 160px;
    min-height: 42px;
}
.section-one-btns button:first-child {
    background-color: #f58634 !important;
    gap:7px
}
.section-one-btns button:last-child {
    border-color: #f58634;
    color: #f58634;
}
.hero{
    padding: 32px;
}
.hero-sections{
    
}
.hero h2:first-child{
    text-align: center;
    color: #252525;
    font-size: 44px;
}
.phone-section{
    
}
.phone{
    width: 350px;
    min-height: 630px;
    margin-left: auto !important;
    border-radius: 30px;
    box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.2);
    padding: 24px;
}
.phone-info_section-titel p{
font-size:medium ;
}
.phone-infos{
    margin-top: 10px ;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.phone-info{
    padding: 15px;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.158);
    border-radius: 5px;
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: small;
    color: #f58634;
}
.hero-infos{
    align-items: center;
}
.hero-info div div i , .hero-info div div span{
    color: #f58634;
    font-size: x-large;
}
/* .hero-info div div i {
    margin-right: 15px;
} */
.hero-info div h5 {
    /* font-size: medium; */
    font-weight: 400;
    width: 70%;
}
.custom-info-icon{
    background-color: #f58634;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px;
    border-radius: 5px;
    transform: rotate(45deg);
    margin-right: 15px;
}
.custom-info-icon i{
    color: white !important;
    font-size: medium !important;
    transform: rotate(-45deg);
}
@media only screen and (max-width: 992px){
    .section-one h1{
        font-size: 30px !important;
}
.section-one h5{
    font-size: 20px !important;
}
.section-one a{
    font-size: 20px !important;
}
.hero h2:first-child{
    font-size: 32px;
}
.hero-info div div span{
    font-size: x-large;
}
.hero-info div h5 {
    font-size: large;
}
.custom-info-icon{
    padding: 10px;
}
.custom-info-icon i{
    font-size: small !important;
}
.phone{
    width: 330px;

}
}
@media only screen and (max-width: 785px){
    
    .phone-section{
    width: 100%;
}
    .phone{
    margin: auto;
}
.hero-section-one{
    flex-direction: column;
}
.phone-section{
    margin: auto;
}
.hero-infos {
    width: 100%;
    margin-top:50px;
}
.hero-info {
    width: 50%;
    margin-top: 15px;
}
.hero-info div h5 {
    width: 100%;
}
}
@media only screen and (max-width: 576px){
    .section-one h1{
        font-size: 25px !important;
}
.section-one h5{
    font-size: 15px !important;
}
.section-one a{
    font-size: 15px !important;
}
.hero h2:first-child{
    font-size: 25px;
}
.hero-info div div span{
    font-size: large;
}
.hero-info div h5 {
    font-size: medium;
}
.custom-info-icon{
    padding: 7px;
}
.custom-info-icon i{
    font-size: x-small !important;
}
.phone{
    width: 300px;

}
}
@media only screen and (max-width: 576px){
    
    .section-one h1{
        font-size: 22px !important;
}
.section-one h5{
    font-size: 12px !important;
}
.section-one a{
    font-size: 12px !important;
}
.hero h2:first-child{
    font-size: 22px;
}
.hero-info div div span{
    font-size: medium;
}
.hero-info div h5 {
    font-size: small;
}
.custom-info-icon{
    padding: 5px;
}


}
</style>