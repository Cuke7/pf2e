<template>
  <v-app dark>
    <v-app-bar app>
      <v-btn icon @click="$router.back()">
        <v-icon color="primary"> mdi-arrow-left </v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.v-app-bar {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}
</style>
