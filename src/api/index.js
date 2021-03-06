import axios from "axios";

const Http = axios.create({
  baseURL: "https://tell-lk.netlify.app/.netlify/functions/api",
  timeout: 10000,
});

// Request interceptor to add the auth token header to requests
Http.interceptors.request.use(
  (config) => {
    const signToken = localStorage.getItem("signToken");
    if (signToken) {
      // console.log("SignToken at request interceptor:", signToken);
      config.headers["Authorization"] = `Bearer ${signToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to refresh token on token expired error
Http.interceptors.response.use(
  (response) => response,
  async (error) => {
    // console.log("Error at response interceptor:", error);
    const originalReq = error.config;
    const refToken = localStorage.getItem("refToken");
    // console.log("refToken at response interceptor:", refToken);

    if (refToken && error.response.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      const res = await Http.post("/auth/refresh", {
        refreshToken: refToken,
      });
      if (res.status === 200) {
        localStorage.setItem("signToken", res.data.result.signToken);
        localStorage.setItem("refToken", res.data.result.refToken);
        return Http(originalReq);
      }
    }
    return Promise.reject(error);
  }
);

const api = {
  post: {
    signin: (body) => Http.post("/auth/pro/signin", body),
  },
  get: {
    allComplaints: (authorityId) => Http.get(`/user/${authorityId}`),
    complaintsByFilter: (status, category, authority, date) =>
      Http.get(
        `/complaints/get/authority?stat=${status}&cat=${category}&auth=${authority}&date=${date}`
      ),
    profile: (userId) => Http.get(`/profile/pro/${userId}`),
    filterData: () => Http.get("/complaints/meta"),
    report: () => Http.get("/complaints/report"),
  },
  patch: {
    updateComplaintStatus: (body) =>
      Http.patch("/complaints/update/status", body),
    commentComplaint: () => Http.patch(`/update/comment`),
    resetPassword: (body) => Http.patch("/auth/pro/reset-password", body),
  },
};

export default api;
