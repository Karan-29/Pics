import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID 6GctQxSl8cPUKjjzJYCKJOsrx764VSusPmsUwVYQnLI",
  },
});
