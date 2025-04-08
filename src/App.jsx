import {  Routes,Route } from "react-router-dom";
import React,{Suspense} from "react";
import spinner from "./assets/icons/spinner.svg";

//Estudiante
const Login = React.lazy(()=> import("./pages/LoginUser"));
const HomeEstudiante = React.lazy(()=> import("./pages/Estudiante/HomeEstudiante"));
const ReunionesEstudiante = React.lazy(()=> import("./pages/Estudiante/ReunionesEstudiante"));
const EntregaRevision = React.lazy(()=> import("./pages/Estudiante/EntregaRevisionEst"));
//Asesor
const HomeAsesor = React.lazy(()=>import("./pages/Asesor/HomeAsesor"));

//Admin
const GestionarUsuarios = React.lazy(()=>import ("./pages/Administrador/GestionUser"))

export  const App = () => {
  return (
    <Suspense
     fallback={
        <div className="bg-[#1c1c34] min-h-screen flex items-center justify-center">
         <img
           src={spinner}
           className="w-[100px] h-[200px] animate-spin"
           alt="spinner"
         />
        </div>
      }
    >
      <Routes>
      <Route path="/" element={<Login/>}/>  

      {/*Intranet del Alumno */}

      <Route path="/estudiante/home" element={<HomeEstudiante/>}/>
      <Route path="/estudiante/reuniones" element={<ReunionesEstudiante/>}/>
      <Route path="/estudiante/entrega" element={<EntregaRevision/>}/>

      {/*Intranet del Asesor  */}

      <Route path="/asesor/home" element={<HomeAsesor/>}/>


      {/*Intranet del Admin  */ }

      <Route path="/admin/gestionar-usuarios" element={<GestionarUsuarios/>}/>

    </Routes>
    </Suspense>
    
  );
}


