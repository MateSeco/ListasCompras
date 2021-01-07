const moment = require("moment");
const randomColor = require("randomcolor");

export function addList(listId, listName) {
  return {
    type: "ADD_LIST",
    payload: {
      id: listId,
      name: listName,
      created: moment().format("L"),
      color: randomColor({
        luminosity: "dark",
        format: "hsla",
        alpha: 0.8,
      }),
    },
  };
}
export function removeList(listId) {
  return {
    type: "REMOVE_LIST",
    payload: { id: listId },
  };
}
