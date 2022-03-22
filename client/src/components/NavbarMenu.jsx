// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

import { Card, Col, Row, Button, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
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
        <Menu className='Menu Menu-direction-row' selectedKeys={["1"]} mode="horizontal">
            <Menu.Item className='' key='web-name'>
                Learn Mern
            </Menu.Item>
            <Menu.Item className='' key='dashboard'>
               <Link to='dashboard'>DashBoard</Link>
            </Menu.Item>
            <Menu.Item className='' key='change-password'>
                <Link to='change-password'>Change Password</Link>
            </Menu.Item>
            <Menu.Item className='' key='web-welcome' title>
                Welcome {username}
            </Menu.Item>
            <Menu.Item key='logout'> 
                <Button type='primary' onClick={logout} icon={<LogoutOutlined />} size='large'>
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    )
}

export default NavbarMenu