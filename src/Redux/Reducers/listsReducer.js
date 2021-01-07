const randomColor = require("randomcolor");

export default function listsReducer(
  state = [
    {
      id: 1,
      name: "Vegetales",
      created: " 8/10/20",
      color: randomColor({
        luminosity: "dark",
        format: "hsla",
        alpha: 0.8,
      }),
    },
    {
      id: 2,
      name: "Panadería",
      created: "10/10/20",
      color: randomColor({
        luminosity: "dark",
        format: "hsla",
        alpha: 0.8,
      }),
    },
  ],
  action
) {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, action.payload];
    case "REMOVE_LIST":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
