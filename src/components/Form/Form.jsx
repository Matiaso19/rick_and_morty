import React, { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';

export const Form = (props) => {
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
    function handleSubmit(evento) {
        evento.preventDefault();
        props.login(userData);
    }

  return (
    <div>
        <div className={style.container}>

        <form onSubmit={handleSubmit} className={style.formulario}>
            <label htmlFor="email">EMAIL: </label>
            <input type="text" name='email' placeholder='Ingresa tu email' onChange={handleChange} value={userData.email} className={errors.email && style.warning}/>
            <p className={style.danger}>{errors.email}</p>
            <br />
            <label htmlFor="password">PASSWORD: </label>
            <input type="password" name='password' placeholder='Ingresa tu contraseña'onChange={handleChange} value={userData.password} className={errors.password && style.warning} />
            <p className={style.danger}>{errors.password}</p>
            
            <button type='submit'>LOGIN</button>
        </form>
        </div>
    </div>
  )
}
