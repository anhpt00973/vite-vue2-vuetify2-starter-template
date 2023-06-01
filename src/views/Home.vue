<template>
  <v-app>
      <AppBar></AppBar>
      <DrawerSolo></DrawerSolo>
      <v-main>
        <router-view></router-view>
          <AppCustomizer/>
      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
      AppBar: () => '../components/system/AppBar.vue',
      DrawerSolo: () => '../components/system/DrawerSolo.vue',
      AppCustomizer: () => "../@core/layouts/components/app-customizer/AppCustomizer.vue",
  }
}
</script>
<style lang="scss">
.logo-banner {
width: 40px;
height: 40px;
}
.v-main {
padding: 0;
margin: 0;
background-color: var(--background-family1);
}
</style>