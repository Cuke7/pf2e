<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-row justify="space-between" align="center">
        <v-col cols="auto" class="pr-0">
          <v-card-title class="primary--text pr-0">
            {{ item.translations.fr.name }}
          </v-card-title>
        </v-col>
        <v-col cols="auto" v-if="item.level" class="pl-0">
          <v-card-title class="primary--text pl-0">
            Niveau {{ item.level }}
          </v-card-title>
        </v-col>
      </v-row>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-chip
          v-for="(trait, index) in item.traits"
          :key="index"
          color="primary"
          outlined
          class="primary--text mr-2 font-weight-bold"
        >
          {{ trait }}
        </v-chip>
      </v-card-text>

      <!-- Spell -->
      <v-card-text v-if="item.entity == 'spell'" class="text-body-1">
        <v-row align="center" justify="start" v-if="item.traditions">
          <v-col cols="auto" class="py-0">
            <span class="font-weight-bold">Traditions</span
            >{{ translateTraditions(item.traditions) }}
          </v-col>
        </v-row>
        <v-row align="center" justify="start" v-if="item.incantation.time">
          <v-col cols="auto" class="py-0">
            <span class="font-weight-bold">Incantation</span
            >{{ translateTime(item.incantation.time) }}
          </v-col>
        </v-row>
        <v-row align="center" justify="start" v-if="item.incantation.time">
          <v-col cols="auto" class="py-0">
            <div v-if="item.translations.fr.range">
              <span class="font-weight-bold"> Portée </span>
              <span>{{ item.translations.fr.range }}</span>
            </div>
            <div v-if="item.translations.fr.target">
              <span class="font-weight-bold"> Cible(s) </span>
              <span>{{ item.translations.fr.target }}</span>
            </div>
            <div v-if="item.translations.fr.areaSize">
              <span class="font-weight-bold"> Zone </span>
              <span>{{ item.translations.fr.areaSize }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <!---->

      <!-- Equipment -->
      <v-card-text v-if="item.entity == 'equipment'" class="text-body-1">
        <v-row align="center" justify="start" v-if="item.type">
          <v-col cols="auto" class="py-0">
            <span class="font-weight-bold">Type </span>{{ item.type }}
          </v-col>
        </v-row>
        <v-row align="center" justify="start" v-if="item.damage">
          <v-col cols="auto" class="py-0">
            <span class="font-weight-bold">Dégâts </span>
            <span>{{ item.damage.dice }}</span>
            <span>{{ item.damage.die }}</span>
            <span>{{ item.damage.type }}</span>
          </v-col>
        </v-row>
      </v-card-text>
      <!---->

      <v-card-text
        v-html="parseCompendium(item.translations.fr.description)"
        class="text-body-1 black--text"
      >
      </v-card-text>
      <!-- Feat -->
      <div v-if="item.entity == 'feat'">
        <v-divider></v-divider>
        <v-card-text v-if="item.translations.fr.benefits" class="text-body-1">
          {{ parseCompendium(item.translations.fr.benefits) }}
        </v-card-text>
      </div>
      <!---->
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "itemLayout",
  async asyncData({ params }) {
    const id = params.item;
    const cat = params.cat;
    return { id, cat };
  },

  data: () => ({
    //
  }),

  methods: {
    translateTraditions(traditions) {
      let traditionsString = "";
      for (const tradition of traditions) {
        switch (tradition) {
          case "occult":
            traditionsString += " occulte,";
            break;
          case "primal":
            traditionsString += " primale,";
            break;
          case "arcane":
            traditionsString += " arcanique,";
            break;
          default:
            traditionsString += " " + tradition + ",";
        }
      }
      return traditionsString.slice(0, -1);
    },
    translateTime(time) {
      if (Number.isInteger(time)) {
        return " " + time + " action(s)";
      } else {
        return " " + time.replaceAll("hour", "h").replaceAll("to", "à");
      }
    },

    parseCompendium(text) {
      return this.$store.getters.parse(text);
    },
  },

  computed: {
    item() {
      return this.$store.getters.item({ id: this.id, cat: this.cat });
    },
  },
};
</script>
