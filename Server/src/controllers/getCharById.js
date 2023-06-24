const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    //version con promesas
 /*   const {id} = req.params;
    axios(`${URL}/${id}`)
    .then(({data})=>{
        const {status, name, species, origin, image, gender } = data;

        const character = {id, status, name, species, origin, image, gender}

        return character.name ? res.status(200).json(character) : res.status(404).send('Not Found')
    })
    .catch(err => res.status(500).send(err.message)) 
    */
// version con asyn await


try {
    const { id } = req.params;
    const { name, gender, image, status, origin, species} = (await axios(`${URL}/${id}`)).data
    const character = {
        id, 
        name, 
        gender,
        image,
        status,
        origin,
        species
    }

   return character.name ? res.status(200).json(character) : res.status(404).send('Character not Found')
    
} catch (error) {
    return res.status(500).json({error:error.message})
}

}

module.exports = getCharById;
