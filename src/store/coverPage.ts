const DEFAULT_CONTENT = {
  title: null,
  description: null,
  countUp: false,
  loading: true,
  refreshCount: false,
  cancelLabel: null,
  cancelAction: () => null
};

const state = {
  display: false,
  content: {
    title: null,
    description: null,
    countUp: false,
    loading: true,
    refreshCount: false,
    cancelLabel: null,
    cancelAction: () => null
  },
  blocking: false
};

const getters = {
  display: state => !!state.display,
  blocking: state => !!state.blocking,
  content: state => state.content
};

const mutations = {
  setDisplay: (state, display) => (state.display = !!display),
  setBlocking: (state, blocking) => (state.blocking = !!blocking),
  setContent: (state, content) => (state.content = { ...content }),
  updateContent: (state, content) => {
    if (!content || Object.keys(content).length === 0) {
      return;
    }

    for (const [key, value] of Object.entries(content)) {
      state.content[key] = value;
    }
  }
};

const actions = {
  setCover: ({ commit }, data) => {
    if (data.content && Object.keys(data.content).length > 0) {
      commit("setContent", data.content);
    }
    commit("setDisplay", data && !!data.display);
  },

  setDisplay: ({ commit }, display) => {
    commit("setDisplay", display);
  },
  setContent: ({ commit }, content) => {
    commit("setContent", content);
  },
  updateContent: ({ commit }, content) => {
    commit("updateContent", content);
  },

  removeCover: ({ commit }) => {
    commit("setDisplay", false);
  },
  resetContent: ({ commit }) => {
    commit("setContent", DEFAULT_CONTENT);
  },

  setBlocking: ({ commit }, blocking) => {
    commit("setBlocking", blocking);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
