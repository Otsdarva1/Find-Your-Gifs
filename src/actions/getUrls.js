import giphyAPI from "../APIs/giphyAPI";

// APIを叩いて取得したデータをもとにactionを返すactionCreater
const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

// APIを叩いてactionをdispatchするメソッド(→reducerが受け取る)
const getUrls = word => {
  return dispatch => {
    dispatch(startRequest());
    giphyAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      // actionをdispatchする
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
