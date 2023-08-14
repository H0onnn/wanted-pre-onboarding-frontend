import { axiosBase } from "./axios";

interface Data {
  email: string;
  password: string;
}

export const signup = async (data: Data) => {
  return await axiosBase.post("auth/signup", data);
};

export const signin = async (data: Data) => {
  return await axiosBase.post("auth/signin", data);
};
