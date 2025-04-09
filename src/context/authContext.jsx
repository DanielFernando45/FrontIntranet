import { createContext, useReducer, useEffect } from "react";
import axios from "axios";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,  // Lee el usuario desde localStorage
    isAuthenticated: !!localStorage.getItem("authToken"),
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("username", JSON.stringify(action.payload));
            localStorage.setItem("authToken", action.payload.token);
            return {
                user: action.payload,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return {
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // 🚀 Nueva función para actualizar el usuario manualmente
    const fetchUser = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/auth/me", {
            withCredentials: true,  // Permite enviar cookies con la solicitud
          });
      
          if (res.status !== 200) throw new Error("No autenticado");
      
          const data = res.data;
          if (data.user) {
            dispatch({ type: "LOGIN", payload: data.user });
          }
        } catch (err) {
          console.log("Usuario no autenticado", err);
        }
      };

    // ⚡ Llamamos a `fetchUser` cuando la app inicia
    useEffect(() => {
        // Verifica si ya hay un usuario autenticado antes de intentar hacer la solicitud
        if (state.isAuthenticated) {
          fetchUser(); // Esto solo se ejecuta si el usuario ya está autenticado
        }
      }, [state.isAuthenticated]);

    return (
        <AuthContext.Provider value={{ state, dispatch, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};
