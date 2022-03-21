import React, {useState} from 'react'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constants';
import { Button } from 'antd'
import setAuthToken from "../utils/setAuthToken";


const initialState = {
    password: '',
    error: '',
    success: ''
}

function ChangePassword() {
    const [data, setData] = useState(initialState)
    // const {token} = useParams()
    const {password} = data

    const handleChangeInput = event => {
        // const {name, value} = event.target
        setData({...data,[event.target.name]: event.target.value})
    }

    const handleChangePass = async formPw => {
        const token = setAuthToken(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
                // const changeData = await 
        try {
            console.log(password)
            console.log(token)
            const res = await axios.post(`${apiUrl}/auth/change-password`, {Authorization: token}, {password: formPw})
            return setData({...data, error: "", success: res.data.message})

        } catch (error) {
            error.response.data.message && setData({...data, error: error.response.data.message, success: ''})
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
