import React, { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';

export const Form = () => {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({
        email:'',
        password:'',
    })
    
    function handleChange(evento) {
        const {name, value} = evento.target;
        setUserData({...userData, [name]: value})
        setErrors(validation({...userData, [name]: value}))
        
    }

  return (
    <div>
        <div className={style.formulario}>

        <form action="">
            <label htmlFor="email">EMAIL</label>
            <input type="text" name='email' placeholder='Ingresa tu email' onChange={handleChange} value={userData.email} className={style.input}/>
            <p className={style.danger}>{errors.email}</p>
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name='password' placeholder='Ingresa tu contraseña'onChange={handleChange} value={userData.password} className={style.input}/>
            <p className={style.danger}>{errors.password}</p>
            <hr />
            <button type='submit' className={style.submit}>SUBMIT</button>
        </form>
        </div>
    </div>
  )
}
