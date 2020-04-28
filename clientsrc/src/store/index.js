import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ?
  "http://localhost:3000/" :
  "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: [],
    activeNote: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
    },
    setActiveNote(state, note) {
      state.activeNote = note
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({
      commit
    }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBugs({
      dispatch,
      commit
    }) {
      api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
          console.log(res.data)
        })
    },

    addBug({
      commit,
      dispatch
    }, bugData) {
      let res = api.post('bugs', bugData)
        .then(res => {
          dispatch('bugDeetz', res.data.data._id)
          router.push({
            name: "BugDetails",
            params: {
              bugId: res.data.data._id
            }
          })
        })
    },

    async bugDeetz({
      commit,
      dispatch
    }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId)
        //console.log(res.data)
        commit('setActiveBug', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async addNote({
      commit,
      dispatch
    }, noteData) {
      try {
        console.log(noteData)
        let res = await api.post('bugs/' + noteData.bugId + '/notes', noteData)
        dispatch('getNotes', noteData.bugId)
      } catch (error) {
        console.error(error)
      }
    },

    async getNotes({
      commit,
      dispatch
    }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId + '/notes')
        commit('setNotes', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteNote({
      commit,
      dispatch
    }, noteData) {
      try {
        let res = await api.delete('notes/' + noteData._id)
        dispatch('getNotes', noteData.bugId)
      } catch (error) {
        console.error(error)
      }
    }

  }
});