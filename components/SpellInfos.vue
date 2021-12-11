<template>
  <div>
    <v-row justify="space-between" class="mx-2">
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
    <v-card-text class="text-body-1 black--text">
      <div class="ml-3">
        <v-row v-if="item.traditions" justify="start">
          <v-col cols="auto" class="pa-0">
            <span class="font-weight-bold">Traditions : </span>&nbsp;
          </v-col>
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
          <span class="font-weight-bold">Incantation : </span
          >{{ item.incantation.time }}
        </v-row>
        <v-row
          v-if="item.translations.fr.range || item.translations.fr.target"
          justify="start"
        >
          <v-col cols="auto" v-if="item.translations.fr.range" class="pa-0">
            <span class="font-weight-bold">Portée : </span>
            {{ item.translations.fr.range }} ;&nbsp;
          </v-col>
          <v-col cols="auto" v-if="item.translations.fr.target" class="pa-0">
            <span class="font-weight-bold">Cible(s) : </span>
            {{ item.translations.fr.target }}
          </v-col>
        </v-row>
        <v-row v-if="item.school">
          <span class="font-weight-bold">École : </span>&nbsp;{{ item.school }}
        </v-row>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>
