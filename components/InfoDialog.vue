<template>
  <v-dialog v-model="dialog2" scrollable max-width="600px">
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="(item, index) in items" :key="index">
          {{ item.translations.fr.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index2) in items" :key="index2">
          <v-card flat>
            <v-card-text
              v-html="$store.getters.parse(item.translations.fr.description)"
            ></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog", "items"],
  data: () => ({
    tab: null,
    regex:
      /@Compendium\[pf2e\.[ ]*?([A-z-0-9]*?)\.[ ]*?([A-z0-9]*?)\]\{(.*?)\}/gm,
  }),
  mounted() {
    this.items;
  },
  watch: {
    items(newVal) {
      //this.tab = newVal.length - 1;
    },
  },
  computed: {
    dialog2: {
      get() {
        return this.dialog;
      },
      set(val) {
        this.$emit("updateDialog", val);
      },
    },
  },
};
</script>

<style scoped>
.v-card {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}
</style>
