
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
    const isLogged = useSelector(state => state.user.isLogged);
    let auth = isLogged

    return (
        auth ? <Outlet/> : <Navigate to='/login'/>
    )
}


