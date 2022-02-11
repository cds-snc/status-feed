import { defineStore } from "pinia";

export const useFeedsStore = defineStore({
  id: "feeds",
  state: () => ({
    feeds: [
      {
        name: "Trello",
        url: "https://trello.status.atlassian.com/history.atom",
      },
    ],
  }),
  getters: {
    currentStatus(state) {
      return state.feeds[0].name;
    },
    getXML(state) {
      let xmlDoc = "";
      fetch(state.feeds[0].url)
        .then((res) => res.text())
        .then((text) => {
          xmlDoc = text;
          console.log(text);
        })
        .catch((err) => console.log(err));
      return xmlDoc;
    },
  },
  actions: {},
});
