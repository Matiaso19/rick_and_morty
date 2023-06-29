const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', ()=> {
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async () =>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const { body } = ((await agent.get('/rickandmorty/character/1')))
            const atributos = [
                "id", 
                "name", 
                "species", 
                "gender", 
                "status", 
                "origin",
                "image"
            ];
            const keys = Object.keys(body)
            atributos.forEach(atributo =>{
                expect(keys).toContain(atributo);
            })
            
        })
        it('Si hay un error responde con status: 500',  async () => {
            await agent.get('/rickandmorty/character/iderroneo')
        })
    })
    describe("GET /rickandmorty/login", () => {
        it('Verificar que la info sea correcta y nos otorgue acceso', async() => {
            const {body} = await agent.get("/rickandmorty/login?email=callefalsa123@gmail.com&password=123456")
            expect(body.access).toEqual(true)
        })
        it('Verificar que la info incorrecta no otorgue acceso', async() => {
            const {body} = await agent.get("/rickandmorty/login?email=callefalsa123@gmail.com&password=error")
            expect(body.access).toEqual(false)
        })
    })
    describe("POST /rickandmorty/fav", () => {
        const char1 = {id:1, name:'Matias'}
        const char2 = {id:2, name:'Julieta'}
        
        it('Devuelve un array con el personaje', async()=>{
            const {body} = (await agent.post("/rickandmorty/fav").send(char1))
            expect(body).toContainEqual(char1)
        })
        it('Al enviar mas de un elemento devuelve todos los elementos', async()=>{
            const {body} = (await agent.post("/rickandmorty/fav").send(char2))
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        }) 
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        const char1 = {id:1, name:'Matias'}
        const char2 = {id:2, name:'Julieta'}
        
        it('Si no se envia un ID correcto se devuelve el mismo array', async()=>{
            const {body} = await agent.delete('/rickandmorty/fav/764541')
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
            
        });
        it('Elimina al personaje que contenga el ID', async () => {
            const {body} = await agent.delete('/rickandmorty/fav/1')
            expect(body).not.toContain(char1)
        })
        
            
         
    })

    
})