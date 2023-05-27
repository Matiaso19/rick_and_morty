import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { removeFav } from '../../redux/actions';

function Favorites({ myFavorites, onClose, removeFav }) {

    function closeFavorite(id) {
        onClose(id);
        removeFav(id)
    }

  return (
    <div>
        {
        myFavorites.map(elemento => {
         return (
            <Card 
            key= {elemento.id}
            id= {elemento.id}
            name= {elemento.name}
            status= {elemento.status}
            species= {elemento.species}
            gender= {elemento.gender}
            origin= {elemento.origin.name}
            image= {elemento.image}
            onClose={()=> closeFavorite(elemento.id)}
            
            />
         )
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