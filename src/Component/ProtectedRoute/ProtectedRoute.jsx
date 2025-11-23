import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isLogin = useSelector(state=>state.login.isLogin)
    if(!isLogin){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}