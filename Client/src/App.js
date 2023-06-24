import { useEffect, useState } from 'react';
//import './App.css';
import axios from 'axios';

//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';
import style from './App.module.css'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Error404 } from './components/Error404/Error404.jsx';
import { Form } from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';





function App() {
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };
   const [characters, setCharacters] = useState([]);
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   //const email = 'callefalsa123@gmail.com';
   //const password = '123456';

   async function login(userData) {
      try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const QUERY =  `?email=${email}&password=${password}`
      const { data } = await axios(URL + QUERY)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
      


      }
      catch (error) {
         return { error: error.message}
      }
      
   }

function logOut() {
   setAccess(false);
   navigate('/')
   
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   async function onSearch(id) {
      try {
   const  url = 'http://localhost:3001/rickandmorty/character/' + id;
   const { data } = await axios(url)  
   const char = characters?.find(e => e.id === data.id) // ver si es necesario el NUMBER(id)
   if(char) {
      alert('El personaje ya esta en la lista!')
   }
   else if(data.id !== undefined) {
      setCharacters((oldChars) => [...oldChars, data]);
   } else {
            alert('Character not Found');
         }
       

      } catch (error) {
         return { error: error.message}
      }
   
   
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id != id))
   }

   const location = useLocation();
   
   
   return (
      <div className={style.App}>
         {(location.pathname !== '/' && <Nav  onSearch={onSearch} logOut={logOut}/>)}
         
         <Routes>
         

         <Route path='/' element={<Form login={login} />}/>
         
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About />}   />
         <Route path='/favorites' element={<Favorites onClose={onClose}/>}   />
         <Route path='/detail/:id' element={<Detail />}   />
         <Route path='*' element={<Error404 />} />
         
         

         </Routes>
         
      </div>
   );
}


export default App;
