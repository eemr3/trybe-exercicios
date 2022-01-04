export default function todos(state = [], action) {
  switch (action.type) {
    case "TODO":
      return [...state, action.text];
    default:
      return state;
  }
}
