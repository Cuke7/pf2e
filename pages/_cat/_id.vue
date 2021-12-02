<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card-title class="primary--text">
        {{ item.translations.fr.name }}
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text v-html="description" class="text-body-1 black--text">
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id;
    const cat = params.cat;
    return { id, cat };
  },

  data: () => ({
    regex:
      /@Compendium\[pf2e\.[ ]*?([A-z-0-9]*?)\.[ ]*?([A-z0-9]*?)\]\{(.*?)\}/gm,
  }),

  computed: {
    item() {
      return this.$store.getters.item({ id: this.id, cat: this.cat });
    },
    description() {
      let description = this.item.translations.fr.description;
      let matchs = description.matchAll(this.regex);
      for (const match of matchs) {
        description = description.replace(
          match[0],
          "<a href='/" + match[1] + "/" + match[2] + "'>" + match[3] + "</a>"
        );
      }
      return description;
    },
  },
};
</script>
