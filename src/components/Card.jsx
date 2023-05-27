import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState } from 'react';

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if(isFav) {
         setIsFav(false)
         props.removeFav(props.id)
      }
      else {
         setIsFav(true);
         props.addFav(props)
      }
         
   }

   return (
      <div className={style.environmentCard}>
         
            {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
            }
         <button onClick={()=>props.onClose(props.id)} className={style.buttonClose}>X</button>
         <div>
            <Link to={`/detail/${props.id}`}>
         <h2 className={style.nombre}>{props.name}</h2>
            </Link>
         </div>

         <img src={props.image} alt={props.name}/> 
         <div className={style.props}>

         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         </div>
         
         
      </div>
         
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(null, mapDispatchToProps)(Card)