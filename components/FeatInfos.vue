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
    <v-card-text class="text-body-1 black--text">
      <div class="ml-3">
        <v-row v-if="item.type">
          <span class="font-weight-bold">Type : &nbsp;</span>{{ item.type }}
        </v-row>
        <v-row v-if="item.rarity">
          <span class="font-weight-bold">Rareté : &nbsp;</span>{{ item.rarity }}
        </v-row>
        <v-row v-if="item.price">
          <span class="font-weight-bold">Prix : &nbsp;</span>{{ item.price }}
        </v-row>
        <v-row v-if="item.range">
          <span class="font-weight-bold">Portée : &nbsp;</span>{{ item.range }}
        </v-row>
        <v-row v-if="item.damage">
          <span class="font-weight-bold">Dégâts : &nbsp;</span
          >{{ item.damage.type + " " }}{{ item.damage.dice
          }}{{ item.damage.die }}
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
