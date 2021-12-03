<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="pa-6 mt-12">
      <v-row justify="space-between" align="center">
        <v-col
          cols="6"
          v-for="(classe, index) in classes"
          :key="index"
          @click="navigateTo(classe)"
        >
          <v-row align="center">
            <v-col cols="4">
              <v-img :src="getSrc(classe)"></v-img>
            </v-col>
            <v-col cols="auto">{{ classe.translations.fr.name }}</v-col>
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
