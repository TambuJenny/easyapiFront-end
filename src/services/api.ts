import react from "react";
import axios from "axios";


 
  
  const request = axios.create({
    baseURL:'http://172.16.17.167/'
  })

export default request;

