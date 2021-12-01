<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-text-field
        color="primary"
        label="Chercher un sort"
        v-model="searchQuery"
        autocomplete="off"
        class="ma-6"
      ></v-text-field>

      <div v-for="(searchResult, index) in searchResults" :key="index">
        <v-list-item @click="navigate(searchResult)">
          <v-list-item-action>
            <v-avatar color="primary">
              {{
                searchResult.traits.includes("cantrip") ? 0 : searchResult.level
              }}
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ searchResult.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-col>
  </v-row>
</template>

<script>
const { Searcher } = require("fast-fuzzy");

import spellData from "~/static/spells.json";

export default {
  data: () => ({
    searchQuery: "",
    searchResults: [],
  }),
  computed: {
    searcher() {
      return new Searcher(spellData, {
        keySelector: (obj) => obj.name,
      });
    },
  },
  methods: {
    navigate(item) {
      this.$router.push("/" + item.category + "/" + item._id);
    },
  },
  watch: {
    searchQuery(val) {
      if (val.length > 0) {
        this.searchResults = [];
        let temp = this.searcher.search(val, {
          returnMatchData: true,
        });

        console.log(temp.length);
        for (const item of temp) {
          console.log(item.item);
        }

        let maxLength = temp.length < 20 ? temp.length : 20;

        for (let i = 0; i < maxLength; i++) {
          this.searchResults.push(temp[i].item);
        }
      }
    },
  },
};
</script>
