import { useState } from 'react';
//import './App.css';

//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';
import style from './App.module.css'
import Nav from './components/Nav/Nav.jsx';


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

   const onSearch = () => {
      setCharacters([...characters, example])
   }
   return (
      <div className={style.App}>
         <Nav  onSearch={onSearch}/>
         <Cards characters={characters} />
         
      </div>
   );
}

export default App;
