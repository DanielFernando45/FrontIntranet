import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeEstudiante from '../pages/Estudiante/HomeEstudiante'
import ReunionesEstudiante from '../pages/Estudiante/ReunionesEstudiante'
import EntregaRevisionEst from '../pages/Estudiante/EntregaRevisionEst'
import HomeAsesor from '../pages/Asesor/HomeAsesor'
import GestionarUsuarios from '../pages/Administrador/GestionUser'
import ErrorScreen from '../pages/ErrorScreen'

const RouterApp = () => {
  return (
    <Routes>
             {/*Intranet del Alumno */}
              <Route path="/estudiante/home" element={<HomeEstudiante/>}/>
              <Route path="/estudiante/reuniones" element={<ReunionesEstudiante/>}/>
              <Route path="/estudiante/entrega" element={<EntregaRevisionEst/>}/>

              {/*Intranet del Asesor  */}
              <Route path="/asesor/home" element={<HomeAsesor/>}/>

              {/*Intranet del Admin  */ }
              <Route path="/admin/gestionar-usuarios" element={<GestionarUsuarios/>}/>

              {/*Error de la Pagina Web */}
              <Route path="*" element={<ErrorScreen/>}></Route>
    </Routes>
  )
}

export default RouterApp