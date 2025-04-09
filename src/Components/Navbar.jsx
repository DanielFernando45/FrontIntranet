import logoaleja from "../assets/images/Aleja.svg";
import logo from "../assets/images/Aleja.svg";
import perfil from "../assets/icons/PerfilIcon.svg";
import flecha from "../assets/icons/Flecha.svg";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-white fixed top-0 left-[100px] w-[calc(100%-6rem)] flex h-[70px] p-[5px_19px] justify-between items-center shadow-md z-10">
      
      <img src={logoaleja} alt="Logo Aleja" className="w-[120px] h-16" />

      <div className="inline-flex items-center gap-4 relative group cursor-pointer">
        <img src={perfil} alt="Icono de perfil" />

        <div className="flex gap-2 items-center">
          <div className="flex flex-col text-right leading-tight">
            <span className="font-medium">{user?.nombre}</span>
            <span className="text-sm text-gray-500">{user?.rol}</span>
          </div>
          <img src={flecha} alt="Flecha menú" />
        </div>

        {/* Aquí iría el menú desplegable dinámico por rol */}
        <div className="absolute right-0 top-[60px] hidden group-hover:flex flex-col bg-white border rounded-lg shadow-md min-w-[150px] p-2">
          {user?.rol === 'estudiante' && (
            <button className="text-left px-2 py-1 hover:bg-gray-100">Mi perfil</button>
          )}
          {user?.rol === 'asesor' && (
            <>
              <button className="text-left px-2 py-1 hover:bg-gray-100">Mi perfil</button>
              <button className="text-left px-2 py-1 hover:bg-gray-100">Agenda</button>
            </>
          )}
          {user?.rol === 'administrador' && (
            <>
              <button className="text-left px-2 py-1 hover:bg-gray-100">Panel de control</button>
              <button className="text-left px-2 py-1 hover:bg-gray-100">Configuración</button>
            </>
          )}
          <hr className="my-1" />
          <button className="text-left px-2 py-1 hover:bg-gray-100 text-red-500">Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
