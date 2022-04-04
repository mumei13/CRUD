import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import LoginForm from '../pages/Login/login.page'
import NavbarMenu from '../components/NavbarMenu'
import { AuthContext } from '../contexts/AuthContext'

function ProtectedRoute() {
    const {
        authState: { isAuthenticated }
    } = useContext(AuthContext)


    console.log("isauthen:", isAuthenticated)
    return (
        (isAuthenticated) ? (
            <>
                <NavbarMenu />
                <Outlet />
            </>
        ) : <LoginForm path='/login' />

    )
}

export default ProtectedRoute