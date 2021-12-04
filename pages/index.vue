<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" class="px-6">
      <v-text-field
        color="primary"
        label="Recherche..."
        v-model="searchQuery"
        autocomplete="off"
        class="mt-6"
      ></v-text-field>

      <v-card-title class="primary--text pa-0">Filtres :</v-card-title>

      <v-row align="center">
        <v-col cols="auto">
          <v-chip-group v-model="filter" column>
            <v-chip
              filter
              outlined
              v-for="(category, index) in categories"
              :key="index"
              :value="category.key"
              >{{ category.name }}</v-chip
            >
          </v-chip-group>
        </v-col>
      </v-row>

      <v-divider class="my-4" v-if="searchResults.length > 0"></v-divider>

      <div class="primary--text text-h5 my-4" v-if="searchResults.length > 0">
        Résultats
      </div>

      <div v-for="(searchResult, index) in searchResults" :key="index">
        <v-list-item @click.stop="openDialog(searchResult)">
          <!-- <v-list-item-action>
            <v-avatar color="primary" class="white--text">
              {{
                searchResult.traits.includes("cantrip") ? 0 : searchResult.level
              }}
            </v-avatar>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>
              {{ searchResult.translations.fr.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>

      <InfoDialog
        v-if="item"
        :dialog="dialog"
        :item="item"
        @updateDialog="updateDialog"
      ></InfoDialog>
    </v-col>
  </v-row>
</template>

<script>
import InfoDialog from "../components/InfoDialog.vue";
const { Searcher } = require("fast-fuzzy");

export default {
  data: () => ({
    item: undefined,
    dialog: false,
    searchQuery: "",
    searchResults: [],
    categories: [
      { name: "Sorts", key: "spells_srd" },
      { name: "Dons", key: "feats_srd" },
      {
        name: "Équipements",
        key: "equipments_srd",
      },
    ],
    filter: "spells_srd",
  }),
  computed: {
    items() {
      if (this.filter) {
        return this.$store.state[this.filter];
      } else {
        return this.$store.getters.allData();
      }
    },
    // feats_srd() {
    //   return this.$store.state.feats_srd;
    // },
    searcher() {
      return new Searcher(this.items, {
        keySelector: (obj) => obj.translations.fr.name,
      });
    },
  },
  methods: {
    navigate(item) {
      this.$router.push("/" + item.category + "/" + item._id);
    },
    updateDialog(val) {
      this.dialog = val;
    },
    openDialog(item) {
      console.log("HEY");
      this.item = item;
      this.dialog = true;
    },
    search(val) {
      this.searchResults = [];
      let temp = this.searcher.search(val, {
        returnMatchData: true,
      });
      let maxLength = temp.length < 20 ? temp.length : 20;
      for (let i = 0; i < maxLength; i++) {
        this.searchResults.push(temp[i].item);
      }
    },
  },
  watch: {
    filter() {
      if (this.searchQuery.length > 0) {
        this.search(this.searchQuery);
      }
    },
    searchQuery(val) {
      if (val.length > 0) {
        this.search(val);
      } else {
        this.searchResults = [];
      }
    },
  },
  components: { InfoDialog },
};
</script>
