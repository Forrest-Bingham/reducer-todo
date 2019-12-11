export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };

      return [...state, newTask];

    case "TOGGLE_COMPLETED":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    case "CLEAR_COMPLETED":
      return state.filter(item => item.completed !== true);

    default:
      return state;
  }
};
