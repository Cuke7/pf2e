<template>
  <v-app dark>
    <v-app-bar app>
      <v-btn icon @click="$router.push('/classes')">
        <v-icon color="primary"> mdi-arrow-left </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon
        color="primary"
        @click.stop="rightDrawer = !rightDrawer"
      ></v-app-bar-nav-icon> -->
    </v-app-bar>
    <!-- <v-navigation-drawer
      app
      :right="true"
      v-model="rightDrawer"
      id="navigation_drawer"
    >
      <v-list>
        <v-list-item>
          <NuxtLink to="#dons">Dons</NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    rightDrawer: false,
  }),
};
</script>

<style>
.v-sheet {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}
</style>

<style>
.v-main {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}

.v-card {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}

.v-sheet {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}

#navigation_drawer {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}
</style>
