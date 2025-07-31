// src/hooks/useGo.js
import { useNavigate } from "react-router-dom";

const useGo = () => {
  const navigate = useNavigate();

  const go = (path, options = {}) => {
    // path: string (e.g., '/about')
    // options: { replace?: boolean, state?: any }
    navigate(path, options);
  };

  return go;
};

export default useGo;
