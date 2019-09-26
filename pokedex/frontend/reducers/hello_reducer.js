//Test for dispatch
const helloReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "HELLO": {
      return {hello: "hello"}
    }
    default: {
      return state;
    }
  }
};

export default helloReducer;
