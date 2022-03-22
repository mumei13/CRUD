import React, {useState} from 'react'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constants';
import { Button } from 'antd'
import setAuthToken from "../utils/setAuthToken";
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

const initialState = {
    password: '',
    error: '',
    success: ''  //Sau để 3 state
}

function ChangePassword() {
    const {
        authState: {
        user: { username }
    },
    logoutUser
    } = useContext(AuthContext)

    const logout = () => logoutUser()

    const [data, setData] = useState(initialState)
    const {password} = data

    const handleChangeInput = event => {
        setData({...data,[event.target.name]: event.target.value})
    }

    const handleChangePass = async formPw => {
        const token = setAuthToken(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
        try {
            const res = await axios.post(`${apiUrl}/auth/change-password`, {password: data.password},  { header: {Authorization: token}})
            if(res.statusText==="OK") {
                logout()
            }
            setData({...data, success: res.data.message})

        } catch (error) {
            console.log(error)
            }
    }

    return (
        <div className=''>
            <h2>Change Your Password</h2>

            <div className=''>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                <Button onClick={handleChangePass} htmlType='submit'>Change Password</Button>
            </div>
        </div>
    )
}

export default ChangePassword
