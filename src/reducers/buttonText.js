const initialState = "Find Your Gifs";

// getUrls.jsでdispatchされたactionを受け取り、storeのstateを変更するreducer
const hoge = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return "Wait...";
    case "RECEIVE_DATA":
      return initialState;
    default:
      return state;
  }
};

export default hoge;
