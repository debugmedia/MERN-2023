export const ACTIONS = {
  INCREMENT: "INCREMENT",
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "reset":
      return {
        count: 0,
      };
    case "decrement_by":
      return {
        count: state.count - action.payload.count,
      };
    case "increment_by":
      return {
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
