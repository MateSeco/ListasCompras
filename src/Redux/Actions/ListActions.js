export function addItem(item, listId) {
  return {
    type: "ADD_ITEM",
    payload: { name: item, purchased: false, list_id: listId },
  };
}
export function removeItem(item) {
  return {
    type: "REMOVE_ITEM",
    payload: { name: item },
  };
}
export function purchaseItem(item) {
  return {
    type: "PURCHASE_ITEM",
    payload: { name: item },
  };
}
