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


export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
