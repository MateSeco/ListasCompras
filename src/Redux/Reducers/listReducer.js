export default function listReducer(
  state = [
    { name: "Manzanas", purchased: true, list_id: 1 },
    { name: "Lechugas", purchased: false, list_id: 1 },
  ],
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.name !== action.payload.name);
    case "PURCHASE_ITEM":
      return state.map((item) => {
        if (item.name === action.payload.name) {
          item.purchased = true;
        }
        return item;
      });
    default:
      return state;
  }
}
