import EstudianteSidebar from "../Components/Sidebar/EstudianteSidebar";
import AsesorSidebar from "../Components/Sidebar/AsesorSidebar";
import AdminSidebar from "../Components/Sidebar/AdminSidebar";
import Navbar from "../Components/Navbar"; // Navbar unificado

const LayoutApp = ({ children }) => {
  // Obtener usuario desde localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Verificación de existencia del usuario
  if (!user) {
    return <div className="text-center p-10">Cargando datos del usuario...</div>;
  }

  // Función para renderizar el sidebar correspondiente
  const renderSidebar = () => {
    switch (user.rol) {
      case 'estudiante':
        return <EstudianteSidebar />;
      case 'asesor':
        return <AsesorSidebar />;
      case 'administrador':
        return <AdminSidebar />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderSidebar()}
      <Navbar user={user}/>
      {children}     
    </div>
  );
};

export default LayoutApp;
