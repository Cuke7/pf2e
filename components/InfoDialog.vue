<template>
  <v-dialog v-model="dialog2" scrollable max-width="600px">
    <v-card>
      <v-card-title class="primary--text">{{
        item.translations.fr.name
      }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text v-html="description" class="pa-6 text-body-1 black--text">
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog2 = false"> Fermer </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog", "item"],
  data: () => ({
    regex:
      /@Compendium\[pf2e\.[ ]*?([A-z-0-9]*?)\.[ ]*?([A-z0-9]*?)\]\{(.*?)\}/gm,
  }),
  computed: {
    dialog2: {
      get() {
        return this.dialog;
      },
      set(val) {
        this.$emit("updateDialog", val);
      },
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
