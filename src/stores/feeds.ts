import { defineStore } from "pinia";

export const useFeedsStore = defineStore({
  id: "feeds",
  state: () => ({
    feeds: [
      {
        name: "Trello",
        url: "https://trello.status.atlassian.com/histor2y.atom",
        pattern: "statuspage",
        lastUpdated: undefined,
        status: "unknown",
      },
      {
        name: "Random",
        pattern: "random",
      },
    ],
  }),
  getters: {
    currentStatus(state) {
      return state.feeds[0].name;
    },
  },
  actions: {
    getFeedStatus(url: string | undefined, pattern: string) {
      switch (pattern) {
        case "statuspage":
          if (url !== undefined) return "<p>All services operational</p>";
          return "<p>Error getting status</p>";
        default:
          return "<p>Status unknown</p>";
      }
    },
    getXML(url: string) {
      let xmlContent: string[] = [];
      console.log(xmlContent);
      fetch(url)
        .then((res) => res.text())
        .then((xml) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(xml, "text/xml");
          xmlContent = Array.from(doc.getElementsByTagName("entry")).map(
            (entryContent) => {
              if (entryContent.textContent) {
                return entryContent.textContent;
              }
              return "empty";
            }
          );
          console.log(xmlContent);
          // if (typeof xmlContent[0] === "string") {
          //   return xmlContent[0];
          // } else {
          //   return "empty content";
          // }
        })
        .catch((err) => console.log(err));
      console.log(xmlContent);
      return xmlContent;
    },
  },
});
