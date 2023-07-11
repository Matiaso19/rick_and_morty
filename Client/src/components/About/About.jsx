import React from 'react'
import styles from './About.module.css';
import meImagen from '../../imagenes/foto_matias_linkedin.jpeg'
import { useNavigate } from 'react-router-dom';



 const About = () => {
  const navigate = useNavigate();
  return (
    
      
    <div className={styles.about}>
        
    <div className={styles.environmentCard}>
    <img className={styles.meImagen} src={meImagen} alt="Foto del Creador" />
      <div className={styles.elements}>
      <h1><span className={styles.keys}>Developer:</span>  Matias Olivera</h1>
      <h1><span className={styles.keys}>Status:</span> Alive?</h1>
      <h1><span className={styles.keys}>Specie:</span> Human</h1>
      <h1><span className={styles.keys}>Gender:</span> Male</h1>
      <h1><span className={styles.keys}>Location: </span> Earth</h1>

      </div>
            

            
            
            
           
           
            
            
            
      
      </div>  
        
            
            
      <div className={styles.buttonContainer}>      
      <button className={styles.button} onClick={()=>{navigate('/home')}}>Home</button>
      </div>
    </div>

    
  );
};

export default About;