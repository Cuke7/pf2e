<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <h1 class="mx-4 my-0">{{ item.translations.fr.name }}</h1>
      <v-card-text v-html="description"></v-card-text>
      <h1 class="mx-4 my-0" id="dons">Liste des dons de classe</h1>
      <v-card-text>
        <v-row
          v-for="(donLevel, index) in dons"
          :key="index"
          class="px-3 mb-12"
        >
          <v-card width="100%" class="pa-2" color="primary">
            <h2 class="my-0 white--text text-right">Niveau {{ donLevel[0].level }}</h2>
          </v-card>
          <div v-for="(don, index2) in donLevel" :key="index2">
            <h3>
              {{ don.translations.fr.name }}
            </h3>
            <div v-html="parseDons(don)"></div>
          </div>
        </v-row>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "classeLayout",
  async asyncData({ params }) {
    const classeId = params.classeId;
    return { classeId };
  },

  mounted() {
    console.log(this.dons.length);
  },

  data: () => ({
    regex:
      /@Compendium\[pf2e\.[ ]*?([A-z-0-9]*?)\.[ ]*?([A-z0-9]*?)\]\{(.*?)\}/gm,
  }),

  methods: {
    parseDons(don) {
      let description = don.translations.fr.description;
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

  computed: {
    dons() {
      let donsClasse = this.$store.state.classfeatures.filter(
        (item) =>
          item.traits.includes(this.item.name.toLowerCase()) &&
          item.level == 1000
      );
      let donsGeneraux = this.$store.state.feats_srd.filter((item) =>
        item.traits.includes(this.item.name.toLowerCase())
      );

      let dons = [].concat.apply([], [donsClasse, donsGeneraux]);

      let feats = [];
      for (let i = 0; i < 21; i++) {
        let temp = [...dons.filter((item) => item.level == i)];
        console.log(i);
        if (temp.length > 0) {
          feats.push(temp);
        }
      }
      return feats;
    },
    item() {
      return this.$store.getters.getClasse(this.classeId);
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

<style>
h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  color: #6d0000;
}

h2 {
  margin-top: 20px;
  color: #6d0000;
}

h3 {
  margin-top: 20px;
  color: #6d0000;
}
</style>
