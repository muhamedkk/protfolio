<template>
<div class="body">
    <!-- <img :src="require('../assets/images/logos/paris_teknoloji.png')" alt=""> -->
    <img src="http://parisajans.com.tr/img/paris%20teknoloji.ac93044b.png" alt="">
    <h1>ERROR 404</h1>
    <p>Oops, this page does not exist!</p>
    <a href="http://parisajans.com.tr/">Back to the homepage</a>
</div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
name: '_404page',
data () {
    return {

    }
},
});
</script>



<style  scoped>
.body{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.body img {
    width: 400px;
}
.body h1 {
    font-size: 70px;
    font-weight: 800;
}
.body p {
    font-size: 30px;
}
.body a {
    font-size: 20px;
    color: #f58634;
}   
@media only screen and (max-width: 600px){

    .body img {
    width: 300px;
}
.body h1 {
    font-size: 55px;
    font-weight: 600;
}
.body p {
    font-size: 23px;
}
.body a {
    font-size: 17px;
    color: #f58634;
}
}
</style>
    
    