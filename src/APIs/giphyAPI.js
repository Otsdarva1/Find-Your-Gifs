import axios from "axios";

const giphyApi = target => {
  const search = target;
  const key = "C7RYVN1E7s4VRDWOeIYPU6A2za3Gx2h3";
  const limit = 50;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;
  return axios.get(url);
};

export default giphyApi;
