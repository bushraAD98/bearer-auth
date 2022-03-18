'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {db} = require('../src/models/index')
let id;
beforeAll( async () =>{
    await db.sync();
})
afterAll( async () =>{
    await db.drop();
})

describe('testing music model for v1 route',()=>{
 
    it ('post new sport', async () => {
        const response = await request.post('/api/v1/music').send({
            name: "test",
            duration : 30
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing get all music',async()=>{
        const response = await request.get('/api/v1/music')
        expect(response.status).toEqual(200)
    })
        
    it ('testing music get by id method',async()=>{
       const response = await request.get(`/api/v1/music/${id}`)
       expect(response.status).toEqual(200);
   })
  

   it ('update new music', async () => {
    const response = await request.put(`/api/v1/music/${id}`).send({
        name: "test",
        duration : 33
    })
    expect(response.status).toEqual(201);
});

it ('deleting music by id',async()=>{
    const response = await request.delete(`/api/v1/music/${id}`)
    expect(response.status).toEqual(204);
})

})

