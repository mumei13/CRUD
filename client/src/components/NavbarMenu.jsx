import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logoutIcon from '../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import './NavBarMenu.scss'
const NavbarMenu = () => {
    const {
        authState: {
            user: { username }
        },
        logoutUser
    } = useContext(AuthContext)

    const logout = () => logoutUser()

    return (
        <Navbar className='navbar navbar-direction-row'>
            <Navbar.Brand className=''>
                Learn Mern
            </Navbar.Brand>
			
            <Navbar.Collapse id='' className='navbar-direction-row'>
                <Nav className=''>
                    <Nav.Link className='' to='/dashboard' as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link className='' to='/change-password' as={Link}>
                        Change Password
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link className='' disabled>
                        Welcome {username}
                    </Nav.Link>
                    <Button className='nav--btn-logout' onClick={logout}>
                        <img src={logoutIcon} alt='logoutIcon' width='20px' height='20px' className=''/>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu