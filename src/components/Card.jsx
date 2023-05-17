import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.environmentCard}>
         
         
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
