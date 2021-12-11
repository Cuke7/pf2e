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
            <v-card-text>
              <SpellInfos
                v-if="item.entity == 'spell'"
                :item="item"
              ></SpellInfos>
              <v-divider class="mx-4 mt-3"></v-divider>
              <v-card-text
                style="max-height: 400px; min-height: 200px; height: 100%;"
                class="text-body-1 container pa-4"
                v-html="$store.getters.parse(item.translations.fr.description)"
              ></v-card-text>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-dialog>
</template>

<script>
import SpellInfos from "./SpellInfos.vue";
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
      this.tab = newVal.length - 1;
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
  components: { SpellInfos },
};
</script>

<style scoped>
.v-card {
  background-image: url("/background.jpg");
  background-repeat: repeat;
}

.container {
  overflow: scroll;
}
</style>
