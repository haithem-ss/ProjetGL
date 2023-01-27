import axios from "axios";

const RequestManager = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  export default RequestManager