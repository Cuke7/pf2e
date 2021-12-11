<template>
  <v-row>
    <v-col>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-title class="primary--text ma-0 pa-0">
            {{ item.translations.fr.name }}
          </v-card-title>
        </v-col>
        <v-col cols="auto">
          <v-card-title class="primary--text pa-0">
            Niveau {{ item.level }}
          </v-card-title>
        </v-col>
      </v-row>
      <v-divider color="black"></v-divider>
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
      <v-card-text class="text-body-1 black--text">
        <div class="ml-3">
          <v-row v-if="item.traditions" justify="start">
            <v-col cols="auto" class="pa-0">Traditions :&nbsp;</v-col>
            <v-col
              cols="auto"
              v-for="(tradition, index) in item.traditions"
              :key="index"
              class="pa-0"
            >
              {{ tradition }} &nbsp;
            </v-col>
          </v-row>
          <v-row v-if="item.incantation.time">
            Incantation : {{ item.incantation.time }}
          </v-row>
          <v-row
            v-if="item.translations.fr.range || item.translations.fr.target"
            justify="start"
          >
            <v-col cols="auto" v-if="item.translations.fr.range" class="pa-0">
              Portée : {{ item.translations.fr.range }} ;&nbsp;
            </v-col>
            <v-col cols="auto" v-if="item.translations.fr.target" class="pa-0">
              Cible(s) : {{ item.translations.fr.target }}
            </v-col>
          </v-row>
          <v-row v-if="item.school"> Tradition : {{ item.school }} </v-row>
        </div>
      </v-card-text>

      <v-card-text
        class="text-body-1"
        v-html="$store.getters.parse(item.translations.fr.description)"
      >
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
  mounted() {
    console.log(this.item);
  },
};
</script>
