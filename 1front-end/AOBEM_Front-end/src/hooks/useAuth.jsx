import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Hook.
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;