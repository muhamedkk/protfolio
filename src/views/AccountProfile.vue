<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris teknoloji.png')" />
      <LinksNavBar/>
      <div class="body">
        <div class="section-one">
            <div class="my-photo">
                <div class="photo">
                    <img v-if="this.$store.state.user_informations.photo" id="image" :src="this.$store.state.user_informations.photo"    >
           
                    <div class="add-photo-btn" @click="modal_type = 'edit_photo'" data-bs-toggle="modal" data-bs-target="#edit">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                </div>
            </div>
            <div class="name-link">
                <h3>{{this.$store.state.user_informations.name}}</h3>
                <a :href="link">parisajans.link/{{this.$store.state.user_informations.link_name}}</a>
               
            </div>
        </div>
        <div class="section-tow mt-3">
            <div>
                <div class="box-info">
                <h6>Profile name</h6>
                <hr>
                <div class="box-text">
                    <p></p>
                    <p>{{this.$store.state.user_informations.name}}</p>
                </div>
                <v-btn class="edit-btn"  @click="modal_type = 'edit_name'"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal" data-bs-toggle="modal" data-bs-target="#edit">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Short description</h6>
                <hr>
                <div class="box-text">
                    <p >Description</p>
                    <p >{{this.$store.state.user_informations.descraption}}</p>
                </div>
                <div class="box-text">
                    <p >Display short description</p>
                    <p >{{this.$store.state.user_informations.show_descraption ? 'Yes' : 'No' }}</p>
                </div>
                <v-btn class="edit-btn"  @click="modal_type = 'edit_descraption'"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal" data-bs-toggle="modal" data-bs-target="#edit">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Alias</h6>
                <hr>
                <div class="box-text">
                    <p ></p>
                    <p ><a href="" style="color: #f58634;">@{{this.$store.state.user_informations.link_name}}</a></p>
                </div>
                <v-btn class="edit-btn"  @click="modal_type = 'edit_link'"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal" data-bs-toggle="modal" data-bs-target="#edit">
                    Edit
                </v-btn>
            </div>
            <div class="box-info mt-3">
                <h6>Activation</h6>
                <hr>
                <div class="box-text">
                    <p ></p>
                    <p >Profile is enabled</p>
                </div>
                <v-btn class="edit-btn"  @click="modal_type = 'enabel'"  prepend-icon="fa-solid fa-pen-to-square" variant="tonal" data-bs-toggle="modal" data-bs-target="#edit">
                    Edit
                </v-btn>
            </div>
            </div>

        </div>
      </div>

      <Foter/>


<!-- Modal -->
<div class="modal fade" id="edit" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content profile-modal-content">
        <div v-if="modal_type==='edit_name'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit profile name</h5>
            </div>
            <div class="modal-body py-0">
                <div class="input">
                    <v-text-field
                        v-model="this.user_informations.name"
                        :rules="[rules.required]"
                        color="#252525"
                        style="color:#252525"
                        label="Profile Name"
                        variant="underlined"
                    ></v-text-field>
                </div>
            </div>
            <div class="modal-footer">
                <v-btn @click="edit_name()"  class='primary-button' style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
        <div v-else-if="modal_type==='edit_descraption'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Description</h5>
            </div>
            <div class="modal-body py-0">
                <div class="input">
                    <v-container fluid>
                    <v-textarea
                    counter
                    id="des_input"
                    label="Description"
                    style="color:#252525"
                    :rules="[rules.len,rules.required]"
                    v-model="this.user_informations.descraption"
                    variant="underlined"
                    ></v-textarea>
                </v-container>
            </div>
        </div>
            <div class="modal-body py-0">
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Display short description</label>
                    <input v-model="this.user_informations.show_descraption" class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            
            <div class="modal-footer">
                <v-btn @click="edit_des()"  class='primary-button' style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
        <div v-else-if="modal_type==='edit_link'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Link</h5>
            </div>
            <div class="modal-body py-0">
                <div class="input">
                    <v-text-field
                    v-model="this.user_informations.link_name"
                    :rules="[rules.required]"
                    :prefix="this.$store.state.host"
                    style="color:#252525"
                    color="#f58634"
                    label="Link"
                    variant="underlined"
                    ></v-text-field>
                </div>
            </div>
            <div class="modal-footer">
                <v-btn @click="edit_link()"  class='primary-button' style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
        <div v-else-if="modal_type === 'enabel'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Enabel</h5>
            </div>
            <div class="modal-body py-0">
                <div class="modal-body p-0 py-2" >
                <div class="form-check form-switch show-des-check py-3" style="border:#252525 solid 1px">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Display short description</label>
                    <input v-model="this.user_informations.is_enabled" class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            </div>
            <div class="modal-footer">
                <v-btn @click="edit_is_enabel()"  class='primary-button' style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
        <div v-else-if="modal_type === 'edit_photo'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Photo</h5>
            </div>
            <div class="modal-body py-0">
                <div class="modal-body p-0 py-2" >
                    <v-file-input
                    style="color:#252525"
                    @change="onFileChange($event)"
   
                    variant="underlined"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="fa-solid fa-camera-retro"
                    label="Photo"
                ></v-file-input>
            </div>
            </div>
            <div class="modal-footer">
                <v-btn @click="edit_photo()"  class='primary-button' style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
    </div>
  </div>
  <button hidden data-bs-dismiss="modal" id="close_modals"></button>
</div>
<!-- Modal s-->
<div class="modal fade" id="accoun-modal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="d-flex justify-content-center align-items-center p-3 pt-4">
            <i v-if="response_type === 'true'" class="fa-solid fa-circle-check response-icon-true"></i>
            <i v-else-if="response_type === 'false'" class="fa-solid fa-circle-xmark response-icon-erorr"></i>
        </div>
        <div class="modal-body pb-3 text-center">
        {{response_message}}
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <v-btn  class='primary-button' style="width: 100%;" data-bs-dismiss="modal"   variant="tonal">
            DONE
        </v-btn>
      </div>
    </div>
  </div>
</div>
<button type="button" hidden id="accoun_modal_btn"  data-bs-toggle="modal" data-bs-target="#accoun-modal">asd
</button>
</div>
  </template>
  
   <script>

    import _axios from '../axios'
    import NavBar from '../components/NavBar.vue';
    import Header from '../components/Header.vue';
    import Foter from '../components/Foter.vue';
    import LinksNavBar from '../components/LinksNavBar.vue';
    import { mapGetters } from 'vuex';
    
    export default  ({
      name: 'AccountProfile',
      components: {
        NavBar,
        Header,
        Foter,
        LinksNavBar,
      },
      data() {
        return {
            s:'a',
            imageSrc:'',
          backgroundColor:'background-color:#ffffff',
          modal_type:'',
          user_informations:'',
          modal_show:'show',
          showdes:true,
          response_message:'s',
          response_type:'',
          photo:'',
          rules2: [v => v.length <= 100 || 'Max 100 characters'],
          rules: {
            len:v => v.length <= 100 || 'Max 100 characters',
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }},
      methods:{
        get_data(){
            this.user_informations = JSON.parse(JSON.stringify(this.$store.state.user_informations))
        },
        edit_name(){
            if(this.user_informations.name.length > 0 ){
                var pyload = {name:this.user_informations.name}
                var headers = {'Authorization': `token ${window.localStorage.token}`}
                _axios.put('/api/edit_name',pyload,{headers:headers})
                .then(() => {
                    this.$store.dispatch('user_info')
                    .then( ()  => {
                        this.get_data()
                        this.response_message = 'The name has been modified successfully'
                        this.response_type = 'true'
                        document.getElementById('accoun_modal_btn').click()
            })
                })
            }
        },
        edit_des(){
            if(this.user_informations.descraption.length > 0 && this.user_informations.descraption.length < 100 ){
                var pyload = {descraption:this.user_informations.descraption,show:this.user_informations.show_descraption}
                var headers = {'Authorization': `token ${window.localStorage.token}`}
                _axios.put('/api/edit_descraption',pyload,{headers:headers})
                .then(() => {
                    this.$store.dispatch('user_info')
                    .then( ()  => {
                        this.get_data()
                        this.response_message = 'The descraption has been modified successfully'
                        this.response_type = 'true'
                        document.getElementById('accoun_modal_btn').click()
            })
                })
            }
        },
        edit_link(){
            if(this.user_informations.link_name.length > 0 && this.user_informations.link_name.length < 100 ){
                var pyload = {link_name:this.user_informations.link_name.toLowerCase()}
                var headers = {'Authorization': `token ${window.localStorage.token}`}
                _axios.put('/api/edit_link_name',pyload,{headers:headers})
                .then(() => {
                    this.$store.dispatch('user_info')
                    .then( ()  => {
                        
                        this.get_data()
                        this.response_message = 'The link has been modified successfully'
                        this.response_type = 'true'
                        document.getElementById('accoun_modal_btn').click()
            })
                }).catch((erorrr) =>{
                    console.log(erorrr)
                    this.response_message = erorrr.response.data.detail
                    this.response_type = 'false'
                    document.getElementById('accoun_modal_btn').click()
                })
            }
        },
        edit_is_enabel(){
                var pyload = {is_enabled:this.user_informations.is_enabled}
                var headers = {'Authorization': `token ${window.localStorage.token}`}
                _axios.put('/api/is_enabled',pyload,{headers:headers})
                .then(() => {
                    this.$store.dispatch('user_info')
                    .then( ()  => { 
                        this.get_data()
                        this.response_message = 'The enabel has been modified successfully'
                        this.response_type = 'true'
                        document.getElementById('accoun_modal_btn').click()
            })
                }).catch((erorrr) =>{
                    console.log(erorrr)
                    this.response_message = erorrr.response.data.detail
                    this.response_type = 'false'
                    document.getElementById('accoun_modal_btn').click()
                })
         
        },
        onFileChange(event) {
            this.photo = event.target.files[0];
            console.log(this.photo)
            },
        edit_photo(){
            const photo = new FormData();
            photo.append('photo', this.photo);
            console.log(this.photo)
            console.log(photo)
            console.log('=====')
                var pyload = {photo:this.photo}
                var headers = {'Authorization': `token ${window.localStorage.token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'}
                _axios.put('/api/edit_photo',pyload,{headers:headers})
                .then(() => {
                    this.$store.dispatch('user_info')
                    .then( ()  => { 
                        this.get_data()
                        this.response_message = 'The photo has been modified successfully'
                        this.response_type = 'true'
                        document.getElementById('accoun_modal_btn').click()
            })
                }).catch((erorrr) =>{
                    console.log(erorrr)
                    this.response_message = erorrr.response.data.detail
                    this.response_type = 'false'
                    document.getElementById('accoun_modal_btn').click()
                })
         
        },

      },
      watch: {

      },
      computed:{
        ...mapGetters(['link']),
      },
      created(){
        
        this.$store.dispatch('user_info')
        .then( result  => {
            result
            this.get_data()
            // document.getElementById('image').setAttribute('src',this.$store.state.user_informations.photo)
        })
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
.box-text{
    padding: 0 !important;
}
.box-text p:first-child{
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: large;
}
.box-text p:last-child{
    font-size: medium;
}

.profile-modal-content{
    background-color: white;
}
.profile-modal-body{
    padding: 16px;
    color: #252525;
}
.profile-modal-body h5{
    margin: 0;
}
.show-des-check{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 16px;
}
.response-icon-true{
    color: green;
    font-size: 50px;
}
.response-icon-erorr{
    color: red;
    font-size: 50px;
}
  </style>

  <style>
  .mdi-close-circle.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default.v-icon--clickable::before{
        content: "x";
        color: #f58634;
  }
</style>