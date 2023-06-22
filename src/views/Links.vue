<template>
    <div>
      <NavBar />
      <Header :backgroundColor="backgroundColor" :image-src="require('../assets/images/logos/paris teknoloji.png')" />
      <LinksNavBar/>
      <div class="body">
        <div class="box">
            <!-- {{user_links}} -->
            <div v-for="(group,i) in the_links" :key="i" class="groups">
                <div class="group-link">
                    <div class="group-header">
                        <div class="group-header-text">
                            <h5>{{group.titel}}</h5>
                        </div>
                        <div class="group-header-icons"> 
                            <i class="fa-solid fa-pen" @click="this.edit_group = {
                                id:group.id,show_titel:group.show_titel,is_active:group.is_active,titel:group.titel},group_type_request = 'EDIT'" data-bs-toggle="modal" data-bs-target="#add_group"></i>
                            <i class="fa-solid fa-trash" @click="this.group_delete_id = group.id" data-bs-toggle="modal" data-bs-target="#group_delete_modal"></i>
                            <div class="d-flex flex-column gap-2">
                                <i class="fa-solid fa-circle-up arrow" @click="move_group({type:'up',group_id:group.id})"></i>
                                <i class="fa-solid fa-circle-down arrow" @click="move_group({type:'down',group_id:group.id})"></i>
                            </div>
                        </div>
                    </div>
                    <div  v-for="(link,i) in group.link.sort((l ,ll) => l.order - ll.order )" :key="i"  class="link">
                        <div class="link-header">
                            <div class="link-header-text">
                                <i v-if="link.link_type === 'whats'" class="fa-brands fa-whatsapp"></i>
                                <i v-else-if="link.link_type === 'phone'" class="fa-solid fa-phone"></i>
                                <i v-else-if="link.link_type === 'sms'" class="fa-solid fa-message"></i>
                                <i v-else-if="link.link_type === 'email'" class="fa-solid fa-at"></i>
                                <div v-else-if="link.link_type === 'link'">
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
                                <p class="m-0">{{link.link_type}} :</p>
                                <p class="m-0">{{link.titel}}</p>
                            </div>
                            <div class="link-header-icons"> 
                                <i class="fa-solid fa-pen" @click="links_type_request = 'EDIT' , edit_link.group_id = group.id ,edit_link.id = link.id,edit_link={
                                    id:link.id,
                                    group_id:link.group_id,
                                    link_type:link.link_type,
                                    link:link.link,
                                    titel:link.titel,
                                    is_active:link.is_active,
                                }" data-bs-toggle="modal" data-bs-target="#add_links"></i>
                                <i class="fa-solid fa-trash" @click="link_delete_id = link.id" data-bs-toggle="modal" data-bs-target="#link_delete_modal"></i>
                            </div>
                        </div>
                        <div class="link-contante">
                            <div class="link-icon">
                                <i v-if="link.link_type === 'whats'" class="fa-brands fa-whatsapp"></i>
                                <i v-else-if="link.link_type === 'phone'" class="fa-solid fa-phone"></i>
                                <i v-else-if="link.link_type === 'sms'" class="fa-solid fa-message"></i>
                                <i v-else-if="link.link_type === 'email'" class="fa-solid fa-at"></i>
                                <div v-else-if="link.link_type === 'link'">
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
                            </div>
                            <div class="contant d-flex align-items-center justify-content-between"  style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;flex-grow: 1;">
                                <a :herf="link.link" class="m-0 " style="    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    max-width: 95%;
">{{link.link}}</a>
                                <div class="d-flex flex-column gap-2">
                                    <i class="fa-solid fa-circle-up arrow" @click="move_link({link_id:link.id,type:'up',group_id:group.id})"></i>
                                    <i class="fa-solid fa-circle-down arrow" @click="move_link({link_id:link.id,type:'down',group_id:group.id})"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-link">
                        <v-btn   class='primary-button ' :class="modal_show"   prepend-icon="fa-solid fa-link" variant="tonal" @click="links_type_request = 'ADD' , new_link.group_id = group.id" data-bs-toggle="modal" data-bs-target="#add_links">
                                Add Link
                        </v-btn>
                    </div>
                </div>
          
                
            </div>
            <v-btn @click="this.group_type_request = 'ADD'"  class='primary-button mt-5' style="width: 100%;" :class="modal_show"   prepend-icon="fa-solid fa-plus" variant="tonal" data-bs-toggle="modal" data-bs-target="#add_group">
                    Add Links Group
            </v-btn>
        </div>
      </div>

      <div class="modal fade" id="add_links" tabindex="-1"  aria-hidden="true">
  <div  class="modal-dialog modal-dialog-centered">
    <div v-if="links_type_request === 'ADD'" class="modal-content profile-modal-content">
        <div>
            <div class="modal-body profile-modal-body  ">
                <h5>Add Link</h5>
            </div>
            <div class="modal-body my-2 py-0 icons-type">
                <div>
                    <div class="icon-div  active-icon" @click="active_lenk_type(4,'link'),new_link.link_type='link',placeholder='www.example.com/page' , new_link.titel='My Web Site' " id='icone4'>
                        <i  class="fa-solid fa-link icon-det"></i>
                    </div>
                    <small class="link-type-text">Link</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(1,'phone'),new_link.link_type='phone',placeholder='Phone Number', new_link.titel='Phone'" id='icone1'>
                        <i  class="fa-solid fa-phone icon-det"></i>
                    </div>
                    <small class="link-type-text">Phone</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(2,'message'),new_link.link_type='sms',placeholder='Phone Number', new_link.titel='sms'" id='icone2'>
                        <i  class="fa-solid fa-message icon-det"></i>
                    </div>
                    <small class="link-type-text">Message</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(12,'whats'),new_link.link_type='whats',placeholder='Phone Number', new_link.titel='WhatsApp'" id='icone12'>
                        <i  class="fa-brands fa-whatsapp"></i>
                    </div>
                    <small class="link-type-text">WhatsApp</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(3,'email'),new_link.link_type='email',placeholder='Email Address', new_link.titel='Email'" id='icone3'>
                        <i  class="fa-solid fa-at icon-det"></i>
                    </div>
                    <small class="link-type-text">Email</small>
                </div>
            </div>
            <div class="modal-body mb-2 py-0">
                <div class="input">
                <v-text-field label="Name" 
                style="color:#252525"
                v-model="new_link.titel"
                :rules="[rules.required]" 
                variant="underlined">
                </v-text-field>
                </div>
            </div>
            <div class="modal-body mb-2 py-0">
                <div class="input">
                <v-text-field :label="Link_input_label" 
                style="color:#252525"
                v-model="new_link.link"
                :hint="this.placeholder"
                :rules="[rules.required]" 
                variant="underlined">
                </v-text-field>
                </div>
            </div>
            <div class="modal-body py-0 shecks">
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Activate link</label>
                    <input v-model="new_link.is_active"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            <div class="modal-footer">
                <v-btn   class='primary-button' @click="add_link()" style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
 
    </div>
    <div v-else-if="links_type_request === 'EDIT'" class="modal-content profile-modal-content">
        <div >
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Link</h5>
            </div>
            <div class="modal-body my-2 py-0 icons-type">
                <div>
                    <div  class="icon-div  active-icon"  @click="active_lenk_type(5,'link'),edit_link.link_type='link',placeholder='www.example.com/page', edit_link.titel='My Web Site'" id='icone5'>
                        <i  class="fa-solid fa-link icon-det"></i>
                    </div>
                    <small class="link-type-text">Link</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(6,'phone'),edit_link.link_type='phone',placeholder='Phone Number', edit_link.titel='Phone'" id='icone6'>
                        <i  class="fa-solid fa-phone icon-det"></i>
                    </div>
                    <small class="link-type-text">Phone</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(7,'message'),edit_link.link_type='message',placeholder='Phone Number' , edit_link.titel='sms'" id='icone7'>
                        <i  class="fa-solid fa-message icon-det"></i>
                    </div>
                    <small class="link-type-text">Message</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(13,'whats'),new_link.link_type='whats',placeholder='Phone Number' , edit_link.titel='WhatsApp'" id='icone13'>
                        <i  class="fa-brands fa-whatsapp"></i>
                    </div>
                    <small class="link-type-text">WhatsApp</small>
                </div>
                <div>
                    <div class="icon-div" @click="active_lenk_type(8,'email'),edit_link.link_type='email',placeholder='Email Address', edit_link.titel='Email'" id='icone8'>
                        <i  class="fa-solid fa-at icon-det"></i>
                    </div>
                    <small class="link-type-text">Email</small>
                </div>
            </div>
            <div class="modal-body mb-2 py-0">
                <div class="input">
                <v-text-field label="Name" 
                style="color:#252525"
                v-model="edit_link.titel"
                :rules="[rules.required]" 
                variant="underlined">
            </v-text-field>
            </div>
            <div class="modal-body mb-2 p-0">
                <div class="input">
                <v-text-field label="Link" 
                style="color:#252525"
                v-model="edit_link.link"
                :hint="this.placeholder"
                :rules="[rules.required]" 
                variant="underlined">
                </v-text-field>
                </div>
            </div>
        </div>
            <div class="modal-body py-0 shecks">
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Activate link</label>
                    <input v-model="edit_link.is_active"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            <div class="modal-footer">
                <v-btn   class='primary-button' @click="edit_link_fu()" style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    edit
                </v-btn>
            </div>
        </div>
    </div>
</div>
</div>


<div class="modal fade" id="add_group" tabindex="-1"  aria-hidden="true">
  <div  class="modal-dialog modal-dialog-centered">
    <div v-if="group_type_request === 'ADD'" class="modal-content profile-modal-content">

        <div v-if=" modal_type === 'AddGroup'">
            <div class="modal-body profile-modal-body  ">
                <h5>Add Group Links</h5>
            </div>
            <div class="modal-body mb-2 py-0">
                <div class="input">
                <v-text-field label="Name" 
                style="color:#252525"
                v-model="new_group.titel"
                :rules="[rules.required]" 
                variant="underlined">
            </v-text-field>

            </div>
        </div>
            <div class="modal-body py-0 shecks">
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Display name of group</label>
                    <input v-model="new_group.show_titel"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Activate group and its links</label>
                    <input v-model="new_group.is_active"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            
            <div class="modal-footer">
                <v-btn   class='primary-button' @click="add_group()" style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    Save
                </v-btn>
            </div>
        </div>
 
    </div>
    <div v-else-if="group_type_request === 'EDIT'" class="modal-content profile-modal-content">
        <div v-if=" modal_type === 'AddGroup'">
            <div class="modal-body profile-modal-body  ">
                <h5>Edit Group Links</h5>
            </div>
            <div class="modal-body mb-2 py-0">
                <div class="input">
                <v-text-field label="Name" 
                style="color:#252525"
                v-model="edit_group.titel"
                :rules="[rules.required]" 
                variant="underlined">
            </v-text-field>

            </div>
        </div>
            <div class="modal-body py-0 shecks">
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Display name of group</label>
                    <input v-model="edit_group.show_titel"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
                <div class="form-check form-switch show-des-check">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="color:#252525">Activate group and its links</label>
                    <input v-model="edit_group.is_active"  class="form-check-input" style="height: 1.2rem;width: 2.5rem !important;" type="checkbox" id="flexSwitchCheckChecked"  checked>
                </div>
            </div>
            
            <div class="modal-footer">
                <v-btn   class='primary-button' @click="edit_group_fu()" style="width: 100%;" :class="modal_show"   prepend-icon="fa-regular fa-floppy-disk" variant="tonal">
                    edit
                </v-btn>
            </div>
        </div>
    </div>
  </div>




  <button hidden data-bs-dismiss="modal" id="close_links_modals"></button>
  <button hidden  id="close_link_modals" data-bs-toggle="modal" data-bs-target="#add_links"></button>

</div>
<div class="modal fade" id="group_delete_modal" tabindex="-1"  aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
      <div class="d-flex justify-content-center align-items-center p-3 pt-4">

          <i class="fa-solid fa-trash response-icon-erorr"></i> 
      </div>
      <div class="modal-body pb-3 text-center">
        Do you really want to delete this group and all the links related to this group?
    </div>
    <div class="modal-footer">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      
      <v-btn @click="delete_group()" class='primary-button' style="width:40%;background-color: red !important;" data-bs-dismiss="modal"  variant="tonal">
          Delete
      </v-btn>
      <v-btn  class='primary-button' style="width:40%;" data-bs-dismiss="modal"  variant="tonal">
          No
      </v-btn>
    </div>
  </div>
</div>
</div>
<div class="modal fade" id="link_delete_modal" tabindex="-1"  aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
      <div class="d-flex justify-content-center align-items-center p-3 pt-4">
          <!-- <i v-if="response_type === 'true'" class="fa-solid fa-circle-check response-icon-true"></i>-->
          <i  class="fa-solid fa-trash response-icon-erorr"></i> 
      </div>
      <div class="modal-body pb-3 text-center">
        Do you really want to delete this link?
    </div>
    <div class="modal-footer">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      
      <v-btn @click="delete_link()" class='primary-button' style="width:40%;background-color: red !important;" data-bs-dismiss="modal"  variant="tonal">
          Delete
      </v-btn>
      <v-btn  class='primary-button' style="width:40%;" data-bs-dismiss="modal"  variant="tonal">
          No
      </v-btn>
    </div>
  </div>
</div>
</div>
<button hidden data-bs-dismiss="modal" id="link_delete"></button>
<button hidden data-bs-dismiss="modal" id="group_delete"></button>
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
    import _axios from '@/axios';
    export default defineComponent({
      name: 'LinksPage',
      data: () => ({
          backgroundColor:'background-color:#ffffff',
          Link_input_label:'Link',
          new_group:{
            show_titel:true,
            is_active:false,
            titel:'',
          },
          edit_group:{
            id:'',
            show_titel:true,
            is_active:true,
            titel:'',
          },
          new_link:{
            group_id:'',
            link_type:'link',
            link:'',
            titel:'My Web Site',
            is_active:true,
          },
          edit_link:{
            id:'',
            group_id:'',
            link_type:'link',
            link:'',
            titel:'',
            is_active:true,
          },
          links_type_request:'ADD',
          user_links:'',
          group_delete_id:'',
          modal_type:'AddGroup',
          modal_show:'show',
          group_type_request:'',
          placeholder:'www.example.com/page',
          link_delete_id:'',
          rules: {
            // len:v => v.length <= 100 || 'Max 100 characters',
            // min: v => v.length >= 8 || 'Min 8 characters',
          required: value => !!value || 'Required.',
        },

      }),
      methods:{
        get_data(){
            this.user_links = JSON.parse(JSON.stringify(this.$store.state.user_links))
        },
        validation(){
            var v = true
            if(this.new_group.titel.length <= 0){
                v=false
            }
            return v
        },
        add_group(){
            if(this.validation()){
                console.log(this.new_group)
                var pyload = this.new_group
                _axios.post('/api/create_group_links',pyload,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
                .then((response)=>{
                    console.log(response)
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_links_modals').click()
                    })

                }).catch( (error) => {
                    console.log(error)
                } )
            }
        },
        edit_group_fu(){
            if(this.edit_group.titel.length > 0){
                var pyload = this.edit_group
                _axios.put('/api/edit_group_links',pyload,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
                .then(()=>{
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_links_modals').click()
                    })
                }).catch( (error) => {
                    console.log(error)
                } )
            }
        },
        delete_group(){
            var id= this.group_delete_id
            console.log(id)
            var headers = {'Authorization': `token ${window.localStorage.token}`}
            _axios.delete(`/api/delete_group/${id}`,{ headers:headers })
                .then((response)=>{
                    console.log(response)
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_links_modals').click()
                    })
                }).catch( (error) => {
                    console.log(error)
                } )
        },
        active_lenk_type(id,type){
            id
            var ico = document.getElementsByClassName("icon-div")
            for(var a = 0 ;a < ico.length;a++){
                console.log(ico[a])
                ico[a].setAttribute('class', 'icon-div');
            }
            this.Link_input_label = type
            console.log(id)
            document.getElementById(`icone${id}`).setAttribute('class','icon-div active-icon')
        },
        add_link(){
            if(this.new_link.link.length > 0 && this.new_link.titel.length > 0 ){
                var pyload = this.new_link
                console.log(pyload)
                var headers =  {'Authorization': `token ${window.localStorage.token}`}
                _axios.post('/api/create_link',pyload,{headers:headers})
                .then(()=>{
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_link_modals').click()
                        this.new_link.group_id=''
                        this.new_link.link_type='link'
                        this.new_link.link=''
                        this.new_link.titel=''
                        this.new_link.is_active=true
                    })
                })
                .catch( (error) => {
                    console.log(error)
                } )
            }
        },
        delete_link(){
            var id= this.link_delete_id
            console.log(id)
            var headers = {'Authorization': `token ${window.localStorage.token}`}
            _axios.delete(`/api/delete_link/${id}`,{ headers:headers })
                .then((response)=>{
                    console.log(response)
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_links_modals').click()
                    })
                }).catch( (error) => {
                    console.log(error)
                } )
        },
        edit_link_fu(){
            if(this.edit_link.link.length > 0 && this.edit_link.titel.length > 0){
                var pyload = this.edit_link
                console.log(pyload)
                console.log('===')
                _axios.put('/api/edit_links',pyload,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
                .then(()=>{
                    this.$store.dispatch('get_my_links')
                    .then( ()  => {
                        this.get_data()
                        document.getElementById('close_link_modals').click()
                        this.edit_link.group_id=''
                        this.edit_link.id=''
                        this.edit_link.link_type='link'
                        this.edit_link.link=''
                        this.edit_link.titel=''
                        this.edit_link.is_active=true
                    })
                }).catch( (error) => {
                    console.log(error)
                } )
            }
        },
        move_link(payload){
  
            _axios.post('/api/move_link',payload,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
            .then( ()=>{
                this.$store.dispatch('get_my_links')
                .then( ()  => {
                    this.get_data()
                })
            } )
        },
        move_group(payload){
            console.log(payload)
            _axios.post("/api/move_group",payload,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
            .then( () => {
                this.$store.dispatch('get_my_links')
                .then( ()  => {
                    this.get_data()
                })
            } )
        },
      },
      computed:{
        the_links(){
            try{
                return this.user_links.slice().sort((g ,gg) => g.order - gg.order ) 
            }
            catch{
                return []
            }
        }
      },
      watch: {
        
      },
      created(){
        
        this.$store.dispatch('get_my_links')
        .then( ()  => {
            this.get_data()
        })
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}
.groups{
    display: flex;
    flex-direction: column;
    gap: 25px;

}
.group-link{
    border-radius:  4px;
    background-color: white;
    box-shadow:0px 0px 5px 3px rgba(0, 0, 0, 0.075);
}
.group-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.100);
}
.group-header-text h5{
    font-weight: 400;
}
.group-header-icons{
    display: flex;
    gap: 20px;
}
.group-header-icons i{
font-size: large;
color: #f58634;
cursor: pointer;
display: flex;
align-items: center;
}
.link{
    border-bottom: solid 1px rgba(0, 0, 0, 0.100);
}
.link-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.100);
}
.link-header-text{
    display: flex;
    align-items: center;
    gap:10px;
}
.link-header-text h5{
    font-weight: 400;
}
.link-header-icons{
    display: flex;
    gap: 15px;
}
.link-header-icons i{
font-size: medium;
color: #f58634;
cursor: pointer;
}
.link-contante{
    display: flex;
    align-items: center;
    
}
.link-icon{
    width: 58px;
    border-right:solid 1px rgba(0, 0, 0, 0.100);
    padding: 24px 24px;
}
.link-icon i{
    color: #f58634;
    font-size: large;
}
.contant {
    padding: 24px 24px;
}
.contant a{
    color: #f58634;
    font-size: large; 
    font-weight: 300;
}

.profile-modal-content{
    background-color: white;
}
.profile-modal-body{
    padding: 16px;
    color: #252525;
    border-right:solid 1px rgba(0, 0, 0, 0.100);
}
.profile-modal-body h5{
    margin: 0;
}
.show-des-check{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 ;
}
.shecks{
    display: flex;
    flex-direction: column;
    gap:25px;
}
.add-link{
    padding: 16px;
}
.icons-type{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
}
.icons-type div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    border-radius: 3px;
}
.icons-type .active-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    border: #f58634 solid 1px;
}
.icons-type div i{
    color: #f58634;
    padding: 16px;
    box-shadow:0px 0px 2px 1px rgba(0, 0, 0, 0.075);
}
.link-type-text{
    color: #f58634;
}
.icons-type div:hover  .link-type-text{
    color: #f584349f;
}
.icons-type div:hover  .icon-det{
    color: #f584349f;
}
  </style>

<style>
.form-check-input:checked{
    background-color: #f58634 !important;
    border: #f58634 solid 1px  !important;
}
.response-icon-erorr{
    color: red;
    font-size: 30px;
}
.arrow{
    color:#2d274b !important;
    cursor: pointer;
}
</style>