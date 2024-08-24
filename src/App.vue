<template>
  <v-app>
    <v-main>
      <NavbarComponent />
      <v-container fluid>
        <router-view></router-view>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
// Import FooterComponent if you have one
// import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    // Register FooterComponent if used
    // FooterComponent
  },
};
</script>

<style></style>
