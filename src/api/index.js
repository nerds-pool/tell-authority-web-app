import axios from "axios";

const Http = axios.create({
  baseURL: "",
  timeout: 10000,
});

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
