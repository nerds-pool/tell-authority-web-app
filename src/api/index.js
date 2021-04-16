import axios from "axios";

const Http = axios.create({
  baseURL: "",
  timeout: 10000,
});

// // Request interceptor to add the auth token header to requests
// http.interceptors.request.use(
//   (config) => {
//     const signToken = localStorage.getItem("signToken");
//     if (signToken) {
//       // console.log("SignToken at request interceptor:", signToken);
//       config.headers["Authorization"] = `Bearer ${signToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor to refresh token on token expired error
// http.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // console.log("Error at response interceptor:", error);
//     const originalReq = error.config;
//     const refToken = localStorage.getItem("refToken");
//     // console.log("refToken at response interceptor:", refToken);

//     if (refToken && error.response.status === 401 && !originalReq._retry) {
//       originalReq._retry = true;
//       const res = await http.post("/auth/refresh", {
//         refreshToken: refToken,
//       });
//       if (res.status === 200) {
//         localStorage.setItem("signToken", res.data.result.signToken);
//         localStorage.setItem("refToken", res.data.result.refToken);
//         return http(originalReq);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

const api = {
  post: {
    signin: async (body) => await Http.post("/", body),
  },
  get: {
    allComplaints: async (userId) => await Http.get(`/user/${userId}`),
  },
  put: {},
  patch: {},
  delete: {},
};

export default api;
