import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({props}) => {

    const history = useHistory();

    const userState = {
        name: 'Javier',
        logged: true
    }
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        
        dispatch({
            payload: userState, 
            type: types.login
        });

        history.replace('/');

    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button className='btn btn-primary'
                    onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
