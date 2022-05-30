import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const userName = useSelector((state) => state.userName)

    if(userName !== ""){
        return <Outlet/>
    }else{
        return <Navigate to="/" />
    }   // La ruta "/users" no funcionará, cada vez que se          
}       // intente acceder se redireccionará 

export default ProtectedRoutes;