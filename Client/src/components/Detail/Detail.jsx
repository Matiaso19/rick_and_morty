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
            <button onClick={()=>{navigate('/home')}}>Volver</button>
            <div className={style.contenedor}>

            <h1>Name: {character.name}</h1>
            <h1>Status: {character.status}</h1>
            <h1>Specie: {character.species}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Origin: {character.origin?.name}</h1>
            
            </div>
            <div>

            <img src={character.image} alt="" />
            </div>
        </div>
    );
};

export default Detail;