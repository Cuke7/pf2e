<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" class="pa-6 mt-12">
      <v-row justify="space-between" align="center">
        <v-col cols="6" v-for="(classe, index) in classes" :key="index">
          <v-row align="center">
            <v-col cols="4">
              <v-img :src="getSrc(classe)"></v-img>
            </v-col>

            <v-col cols="8" class="pl-0">
              <v-card
                color="primary"
                @click="navigateTo(classe)"
                class="pa-2 white--text"
                width="100%"
              >
                {{ classe.translations.fr.name }}
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  computed: {
    classes() {
      return this.$store.state.classeList;
    },
  },
  methods: {
    navigateTo(classe) {
      this.$router.push("./classe/" + classe._id);
    },
    getSrc(classe) {
      return "/classIcons/" + classe.translations.fr.name + ".png";
    },
  },
};
</script>
