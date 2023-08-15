import { useEffect } from "react";
import { useTokenContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { token } = useTokenContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    } else {
      navigate("/signin");
    }
  }, [token, navigate]);

  return null;
};

export default Home;
