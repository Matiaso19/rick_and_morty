import { useState } from 'react';
import styles from './SearchBar.module.css'



export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (evento) => {
      setId(evento.target.value);   
   
   }

   return (
      <div className={styles.environmentSearch}>
         <>
         <div>

         <input className={styles.input} type='search' onChange={handleChange} value={id} />
         <button className={styles.agregar} onClick={() => {props.onSearch(id)}}>Search</button>
         
         </div>
         </>
      </div> 
   );
};

