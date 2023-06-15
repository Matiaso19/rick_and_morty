const getCharById = require('./controllers/getCharById')
const http = require('http');
const PORT = 3001;




http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    

    if(req.url.includes('/rickandmorty/character/')) {
        let id = req.url.split("/").at(-1)
        let realId = Number(id);
        getCharById(res, realId)
    }
    

    
}).listen(PORT, () => {
    console.log('in port http://localhost:3001');
})