const http = require('http');
const { url } = require('inspector');
const characters = require('./utils/data')

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url.split('/');
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    //traer todos los caracteres

    if(param1 === 'rickandmorty' && param2 === 'characters'){
       return res.writeHead(200, {'content-type': 'application/json'}).end(JSON.stringify(characters))
    }
    // traer character por ID
    if(param1 === 'rickandmorty' && param2 === 'character'){
        const character = characters.find((ch) => {
            return ch.id === Number(id)
        })    
        if(character) {
        return res.writeHead(200, {'content-type': 'application/json'}).end(JSON.stringify(character))
        }
        
    }
    return res.writeHead(404, {'content-type': 'text-plain'}).end('Route not found')

    
}).listen(PORT, () => {
    console.log('in port http://localhost:3001');
})