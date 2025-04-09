import {BrowserRouter, Routes,Route } from "react-router-dom";
import React,{Suspense} from "react";
import spinner from "./assets/icons/spinner.svg";
import Login from "./pages/LoginUser";
import RouterApp from "./routes/RouterApp";
import ProtectedRoutes from "./routes/ProtectedRoutes";



export  const App = () => {
  return (
    <Suspense
            fallback={
                <div className="bg-[#ffff] min-h-screen flex items-center justify-center">
                <img
                  src={spinner}
                  className="w-[100px] h-[200px] animate-spin"
                  alt="spinner"
                />
                </div>
              }
            >
      <BrowserRouter>
                <Routes>
                  <Route path="/*" element={
                    <ProtectedRoutes>
                     <RouterApp/> 
                    </ProtectedRoutes>
                    } 
                  />
                  <Route path="/" element={<Login/>}/>  
                </Routes>
      </BrowserRouter>

      </Suspense>
  );
}


