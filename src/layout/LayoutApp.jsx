
// import EstudianteSidebar from "../Components/Sidebar/EstudianteSidebar"
// import EstudianteNavbar from "../Components/Navbar/EstudianteNavbar"
import AsesorSiderbar from "../Components/Sidebar/AsesorSidebar"
import AsesorNavbar from "../Components/Navbar/AsesorNavbar"
import AdminSiderbar from "../Components/Sidebar/AdminSidebar"
import AdminNavbar from "../Components/Navbar/AdminNavbar"



const LayoutApp = ({children}) =>{
    return(
        <div>
            <AdminSiderbar/>
            <AdminNavbar/>
            {children}
        </div>
    );
}
export default LayoutApp;