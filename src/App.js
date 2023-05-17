import { useState } from 'react';
//import './App.css';
import axios from 'axios';

//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';
import style from './App.module.css'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';




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



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if(!characters.find(char => char.id === data.id)) {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
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
   return (
      <div className={style.App}>
         <Nav  onSearch={onSearch}/>
         <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path='/about' element={<About />}   />
         <Route path='/detail/:id' element={<Detail />}   />
         
         

         </Routes>
         
      </div>
   );
}

export default App;
