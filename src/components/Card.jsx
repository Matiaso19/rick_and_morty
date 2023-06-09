import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useEffect, useState } from 'react';

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
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

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
         
            <Link className={style.link} to={`/detail/${props.id}`}>
         <h2 className={style.nombre}>{props.name}</h2>
         

         <img src={props.image} alt={props.name}/> 
         <div className={style.props}>

         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         </div>
         
         
            </Link>
      </div>
         
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)