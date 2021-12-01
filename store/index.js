import spellData from "~/static/spells.json";

export const state = () => ({
  spellData: spellData,
});

export const getters = {
  getSpell: (state) => (id) => {
    return state.spellData.find((item) => item._id === id);
  },
};

export const mutations = {
  //   updateSearchQuery(state, value) {
  //     state.searchQuery = value;
  //   },
  //   updatBirdName(state, value) {
  //     state.BirdName = value;
  //   },
};
