import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XFA2hHx6fBbjvEIkzApFxJFrAGWHaddrY6ww8gqi6-A",
  },
});
