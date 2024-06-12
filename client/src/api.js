
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api', // Ensure this matches your backend base URL
//   withCredentials: true, // Include credentials with requests
// });

// export default api;


// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true, // This ensures cookies are included in requests
});

export default api;
