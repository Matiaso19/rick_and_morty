import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css'

const Detail = () => {
    const navigate = useNavigate();
    
    
    
    const { id } = useParams();
    
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
            <div className={style.Detail}>

            <div className={style.contenedor}>
            <img className={style.image} src={character.image} alt="Character Image" />
            <div className={style.elements}>
            <h1><span className={style.keys}>Name:</span>  {character.name}</h1>
            <h1><span className={style.keys}>Status:</span> {character.status}</h1>
            <h1><span className={style.keys}>Specie:</span> {character.species}</h1>
            <h1><span className={style.keys}>Gender:</span> {character.gender}</h1>
            <h1><span className={style.keys}>Origin:</span> {character.origin?.name}</h1>
            </div>
            </div>
            </div>
            <button className={style.button} onClick={()=>{navigate('/home')}}>Volver</button>
            <div>

            </div>
        </div>
    );
};

export default Detail;