import Card from './Card';

export default function Cards({characters}) {
   return (
   <div>
      {characters.map(elemento => {
         return (
            <Card 
            key= {elemento.id}
            id= {elemento.id}
            name= {elemento.name}
            status= {elemento.status}
            species= {elemento.species}
            gender= {elemento.gender}
            origin= {elemento.origin.name}
            image= {elemento.image}
            onClose={() => window.alert('Emulamos que se cierra la card')} 
            />
         )
      })
      }
   </div>
   )
}
