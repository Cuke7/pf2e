<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>{{ spell.name }}</h1>
      <v-row class="text-body-1">
        <v-col cols="auto" v-html="spell.description"> </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },

  computed: {
    spell() {
      return this.$store.getters.getSpell(this.id);
    },
  },
};
</script>
