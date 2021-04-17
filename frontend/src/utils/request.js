import axios from 'axios';

const request = axios.create({
  baseURL: "http://localhost/mobile-salon-app/",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});



export default request;