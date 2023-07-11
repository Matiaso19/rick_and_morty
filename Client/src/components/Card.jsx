import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa'




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
               <button className={style.corazon} onClick={handleFavorite}>
                  ❤️
                  </button>
            ) : (
               <button className={style.corazon} onClick={handleFavorite}>🤍</button>
            )
            }
         
         <button onClick={()=>props.onClose(props.id)} className={style.buttonClose}>X</button>
         
            <Link className={style.link} to={`/detail/${props.id}`}>
         <h2 className={style.nombre}>{props.name}</h2>
         

         <img className={style.imagen} src={props.image} alt={props.name}/> 
         <div className={style.props}>

         <h2> <span className={style.datos}>Status:</span> {props.status}</h2>
         <h2><span className={style.datos}>Specie:</span> {props.species}</h2>
         <h2><span className={style.datos}>Gender:</span> {props.gender}</h2>
         <h2><span className={style.datos}>Origin:</span> {props.origin}</h2>
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