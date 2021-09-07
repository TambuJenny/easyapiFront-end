import react from "react";
import axios from "axios";



  
  const request = axios.create({
    baseURL:'localhost:8000/'

  })
  
export default request;

