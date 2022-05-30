import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';

const UserLogin = () => {

    const [ userName, setUserName ] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        console.log(userName)
        dispatch(changeUser(userName))
        navigate("/pokemon")
    }
    return (
        <div>
            <h1>User Input</h1>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button onClick={getName} >Enviar</button>
        </div>
    );
};

export default UserLogin;