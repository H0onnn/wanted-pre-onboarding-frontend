import axios from "axios";
import { toast } from "react-hot-toast";

export const axiosBase = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosBase.interceptors.request.use((config) => {
  const tokenStr = localStorage.getItem("access_token");
  const token = tokenStr ? JSON.parse(tokenStr).access_token : null;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error);
    } else if (error.request) {
      toast.error("요청 전송 오류: 서버에 요청을 보낼 수 없습니다.");
    } else {
      toast.error("요청 준비 오류: 요청을 처리하는 도중 오류가 발생했습니다.");
    }

    return Promise.reject(error);
  }
);
