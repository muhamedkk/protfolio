<template>
  <div v-if="JSON.parse(JSON.stringify(this.$store.state.user_informations)).is_enabled" class="body">
    <div class="section-one">
            <div class="my-photo">
                <div class="photo">
                    <img v-if="this.$store.state.user_informations.photo" :src="this.$store.state.user_informations.photo"  alt=""  >
                    <i  v-else class="fa-solid fa-user user-icon"></i>
                </div>
            </div>
            <div class="name-link">
                <h3>{{this.$store.state.user_informations.name}}</h3>
                <h4 v-if="this.$store.state.user_informations.show_descraption">{{this.$store.state.user_informations.descraption}}</h4>
            </div>
    </div>
    <div class="links-section mt-3">
        <div v-for="(group,i) in get_protfolio_link" :key="i" >        
            <div v-if="group.link.length !== 0 && group.is_active" class="group">
                <div v-if="group.show_titel" class="group-header">
                    <h6>{{group.titel}}</h6>
                </div>
                <div class="links">
                        <div v-for="(link,c) in group.link" :key="c">
                            <div v-if="link.is_active" >
                            <a v-if="link.link_type === 'phone'"  target="_blank" :href="`tel:${link.link}`" class="link">
                                    <div class="link-icon">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div class="link-text">
                                    <h6 class="m-0">{{link.titel}}</h6>
                                </div>
                            </a>
                            
                                <a v-if="link.link_type === 'whats'" target="_blank" :href="`https://wa.me/${link.link}?text=`" class="link">
                                    <div class="link-icon">
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </div>
                                <div class="link-text">
                                    <h6 class="m-0">{{link.titel}}</h6>
                                </div>
                            </a>
                            <a v-if="link.link_type === 'sms'" target="_blank" :href="`sms:${link.link}`" class="link">
                                    <div class="link-icon">
                                    <i  class="fa-solid fa-message"></i>
                                </div>
                                <div class="link-text">
                                    <h6 class="m-0">{{link.titel}}</h6>
                                </div>
                            </a>
                            <a v-if="link.link_type === 'email'" target="_blank" :href="`mailto:${link.link}`" class="link">
                                    <div class="link-icon">
                                    <i  class="fa-solid fa-at"></i>
                                </div>
                                <div class="link-text">
                                    <h6 class="m-0">{{link.titel}}</h6>
                                </div>
                            </a>
                            <a v-if="link.link_type === 'link'" target="_blank" :href="`${link.link}`" class="link">
                                    <div class="link-icon">
                                        <i v-if="link.link_type === 'link' && link.link.indexOf('facebook.com') !== -1  " class="fa-brands fa-facebook"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('instagram.com') !== -1  " class="fa-brands fa-instagram"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('linkedin.com') !== -1  " class="fa-brands fa-linkedin"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('telegram.com') !== -1  " class="fa-brands fa-telegram"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('snapchat.com') !== -1  " class="fa-brands fa-snapchat"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('tiktok.com') !== -1  " class="fa-brands fa-tiktok"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('youtube.com') !== -1  " class="fa-brands fa-youtube"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('twitter.com') !== -1  " class="fa-brands fa-twitter"></i> 
                                        <i v-else-if="link.link_type === 'link' && link.link.indexOf('/maps/.com') !== -1  " class="fa-solid fa-location-dot"></i> 
                                        <i v-else class="fa-solid fa-link"></i> 
                                </div>
                                <div class="link-text">
                                    <h6 class="m-0">{{link.titel}}</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="foter" style="position: fixed; bottom: 0px;width: 100%;height: 130px;display: flex;flex-direction: column;background-color:#f6f6f6;">
                <img @click="$router.push({'name':'HomePage'})"  :src="require('../assets/images/logos/paris teknoloji.png')" style=" width: 150px; cursor: pointer;background-color: rgb(230 230 230);border-radius: 10px;padding: 10px;"  alt="">
        </div>
        <!-- <div class="foter" style="position: fixed; bottom: 0px;width: 100%;height: 130px;display: flex;flex-direction: column;">
                <img @click="$router.push({'name':'HomePage'})"  :src="require('../assets/images/logos/paris_teknoloji.png')" style=" width: 150px; cursor: pointer;"  alt="">
                <p class="m-0" style="color:white">Clilck To Start Your First Link</p>
        </div> -->
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
    name: 'ProtfolioPage',
    data: () => ({
        backgroundColor:'background-color:#ffffff',
        user_links:'',
    }),
    methods:{
        get_data(){
            this.user_informations = JSON.parse(JSON.stringify(this.$store.state.user_informations))
        },
  
        
    },
    components: {
    },
    beforeCreate(){
        // this.$store.dispatch('user_info')
        this.$store.dispatch('protifolio', this.$route.params.Protfolio)
        .then( result  => {
            result
            this.get_data()
        })
        this.$store.dispatch('get_links', this.$route.params.Protfolio)

    },
    computed:{
        ...mapGetters(['get_protfolio_link'])
    }
  });
  </script>


<style scoped>
.body{
  background-color: #f6f6f6 ;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo img{
  width: 100%;
  height: 100%;
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
  font-size: x-large;
}
.name-link h4{
    font-size: large;
font-weight: 400;
}
.user-icon{
    font-size: 40px;
    color: #c2c2c2;
}
.links-section{
    max-width: 400px;
    margin: auto;
    padding: 8px;
}
.group-header{
    border-bottom: solid 1px rgba(0, 0, 0, 0.200);
}
.links{
    margin-top: 12px;
}
.link{
    margin-top: 10px;
    color: #f58634;
    background-color: white;
    border-radius:4px ;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow:0px 0px 6px 1px rgba(0, 0, 0, 0.075);
}
.link-icon{
    padding: 16px;
    width: 58px;
    padding: 18px 18px;
}
.link-text{
    padding: 10px 10px;
}
.links-section{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>