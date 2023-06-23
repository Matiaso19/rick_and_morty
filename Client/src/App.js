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

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

function logOut() {
   setAccess(false);
   navigate('/')
   
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if(!characters.find(char => char.id === data.id)) {
         if (data.name) {
            
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
         }
      else {
         alert(`Ya existe el personaje con el id ${id}!!`)
      }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
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
