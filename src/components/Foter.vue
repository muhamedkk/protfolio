<template>
    <div class="foter">
        <h5>
            Paris.Link © 2023
        </h5>
    </div>
</template>

<script>

    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'FoterSection',
        data () {
          return {
          }
        },
        components: {
        },
      });
    </script>
      
    <style>
    .foter{
        height: 75px;
        background-color: #252525;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .foter h5{
        color: white;
        font-size: small !important;
        margin: 0;
        
    }
    </style>
    
    