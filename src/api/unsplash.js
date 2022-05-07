import axios from 'axios';

export default axios.create({
  baseUrl: "http://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID otbItvbgsfWPNyMSHlepsKBdVem5qXA3d5SPlcZrDnk",
  },
});