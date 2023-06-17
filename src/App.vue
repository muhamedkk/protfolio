<template>
  <v-app>
    <v-main class="p-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  head: {
       link: [
             {
                 rel: "icon",
                 href: require("../src/assets/images/logos/paris teknoloji.png")
             },
          ]
       },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
