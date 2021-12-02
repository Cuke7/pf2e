import actionspf2e from "~/static/data/actionspf2e.json";
import ancestries from "~/static/data/ancestries.json";
import ancestryfeatures from "~/static/data/ancestryfeatures.json";
import archetypes from "~/static/data/archetypes.json";
import backgrounds from "~/static/data/backgrounds.json";
import classes from "~/static/data/classes.json";
import classesfeature from "~/static/data/classfeatures.json";
import conditionitems from "~/static/data/conditionitems.json";
import equipments_srd from "~/static/data/equipment-srd.json";
import feats_srd from "~/static/data/feats-srd.json";
import spells_srd from "~/static/data/spells-srd.json";
import spell_effects from "~/static/data/spell-effects.json";

export const state = () => ({
  spells_srd: spells_srd.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
  feats_srd: feats_srd.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
  equipments_srd: equipments_srd.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
  spell_effects: spell_effects.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
  conditionitems: conditionitems.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
  actionspf2e: actionspf2e.filter(
    (item) => item.translations.fr.status != "aucune"
  ),
});

export const getters = {
  getSpell: (state) => (id) => {
    return state.spells_srd.find((item) => item._id === id);
  },
  allData: (state) => () => {
    let array = [].concat.apply(
      [],
      [state.spells_srd, state.feats_srd, state.equipments_srd]
    );
    console.log(array);
    return array;
  },
  item: (state) => (itemData) => {
    let cat = itemData.cat;
    let id = itemData.id;
    if (cat == "spell-effects") {
      return state.spell_effects.find((item) => item._id === id);
    }
    if (cat == "feat-srd") {
      return state.feats_srd.find((item) => item._id === id);
    }
    if (cat == "equipment-srd") {
      return state.equipments_srd.find((item) => item._id === id);
    }
    if (cat == "spells-srd") {
      return state.spells_srd.find((item) => item._id === id);
    }
    if (cat == "conditionitems") {
      return state.conditionitems.find((item) => item._id === id);
    }
    if (cat == "actionspf2e") {
      return state.actionspf2e.find((item) => item._id === id);
    }
  },
};

export const mutations = {
  //   updatBirdName(state, value) {
  //     state.BirdName = value;
  //   },
};
