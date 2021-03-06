import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const userName = useSelector((state) => state.userName)

    if(userName !== ""){
        return <Outlet/>
    }else{
        return <Navigate to="/" />
    }   // La ruta "/users" no funcionarÃ¡, cada vez que se          
}       // intente acceder se redireccionarÃ¡ 

export default ProtectedRoutes;