import React, { useState } from 'react';
import Card from '../Card';
import { connect, useDispatch } from 'react-redux';
import { removeFav, filterCards, orderCards, reset } from '../../redux/actions';
import style from './Favorites.module.css'




function Favorites({ myFavorites, onClose, removeFav }) {

    const [aux, setAux] = useState(false);

    function closeFavorite(id) {
        onClose(id);
        removeFav(id)
    }

    const dispatch = useDispatch();

    function handleOrder(evento) {
        dispatch(orderCards(evento.target.value))
        setAux(!aux)
    }
    function handleFilter(evento) {
        dispatch(filterCards(evento.target.value))
    }
    function resetButton() {
        dispatch(reset())
    }


  return (
        <div className={style.FavsDiv}>
      <div className={style.input}>

        <select onChange={handleOrder}>
        <option value="A">Sort from lowest to highest</option>
        <option value="D">Sort from highest to lowest</option>
        </select>
        </div>
        <div className={style.input}>


        <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>
        </div>
        <div>

        <button onClick={resetButton}>Reset</button>
        </div>

        {
        myFavorites.map(elemento => {
            //if(elemento.id) {

            
         return (
            <Card 
            key= {elemento.id}
            id= {elemento.id}
            name= {elemento.name}
            status= {elemento.status}
            species= {elemento.species}
            gender= {elemento.gender}
            origin= {elemento.origin?.name}
            image= {elemento.image}
            onClose={()=> closeFavorite(elemento.id)}
            
            />
         )
           // }
      })
      }
    </div>
  )
}

function mapState(st) {
    return {
        myFavorites:st.myFavorites,
    }
}

function mapDispatch(dis) {
    return {
        removeFav: (id) => dis(removeFav(id))
    }
}

export default connect(mapState, mapDispatch)(Favorites);