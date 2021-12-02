<template>
  <v-app dark>
    <v-app-bar app>
      <v-app-bar-nav-icon
        color="primary"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pa-0"
      color="grey lighten-3"
      id="navigation_drawer"
    >
      <v-list>
        <v-list-item
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in pages"
          exact
        >
          <!-- <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    drawer: false,
    pages: [
      {
        to: "/",
        title: "Accueil",
      },
      {
        to: "/classes",
        title: "Classes",
      },
    ],
  }),
};
</script>

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
