<template>
  <div>
    <v-row justify="space-between" class="mx-2">
      <v-col cols="auto">
        <v-card-title class="primary--text ma-0 pa-0">
          {{ item.translations.fr.name }}
        </v-card-title>
      </v-col>
      <v-col cols="auto" v-if="item.level">
        <v-card-title class="primary--text ma-0 pa-0">
          Niveau {{ item.level }}
        </v-card-title>
      </v-col>
    </v-row>
    <v-divider color="black" class="mx-4"></v-divider>
    <v-chip-group class="ml-4 my-2">
      <v-chip
        v-for="(trait, index) in item.traits"
        :key="index"
        outlined
        color="primary"
      >
        {{ trait }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>
