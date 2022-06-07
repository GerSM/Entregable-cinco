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
        <div className='form-login'>
            <h1 className='greeting'>!Hola Entrenador!</h1>
                <div className='container'>
                    <h3 className='instructions'>Para poder comenzar, dame tu nombre</h3>
                    <form>
                        <input className='input-name' type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Nombre..."/>
                        <button className='button-start' onClick={getName} >Comenzar</button>
                    </form>
            </div>
        </div>
    );
};

export default UserLogin;