import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: "https://foodie-fellowship-server.vercel.app/api/v1",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .then((error) => {
              toast.error("Access denied");
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
