
import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function AnonymousRoutes() {
    const isLogged = useSelector(state => state.user.isLogged);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const to = setTimeout(() => {
        setAuth(isLogged);
        }, 2100);
        return () => {
        clearTimeout(to);
        };
    }, [isLogged]);

    return auth ? <Navigate to='/' /> : <Outlet />;
}
