const initialState = [];

// getUrls.jsでdispatchされたactionを受け取り、storeのstateを変更するreducer
const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default imageUrls;
