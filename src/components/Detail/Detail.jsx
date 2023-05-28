import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css'

const Detail = () => {
    const navigate = useNavigate();
    
    
    
    const { id } = useParams();
    
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return (
        <div>
            <button onClick={()=>{navigate('/home')}}>Volver</button>
            <div className={style.contenedor}>

            <h1>Name:{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character.origin?.name}</h1>
            
            </div>
            <div>

            <img src={character.image} alt="" />
            </div>
        </div>
    );
};

export default Detail;