import app from '../src/app'
import request from 'supertest'

describe('GET/ tasks', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        //verificando que el status de la respuesta sea 200
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async () => {
        const response = await request(app).get('/tasks').send()
        //compoarando que la respuesta sea de tipo array
        expect(response.body).toBeInstanceOf(Array)
    })

})

describe('POST /tasks', () => {

    describe('given a title and description', () => {

        const newTask = {
            title: 'test task',
            description: 'test task'
        }

        //should respond with a 200 status code
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.statusCode).toBe(200)
        })
        //should respond with a content-type of application/json
        test('should hae a content-type:application-json in header', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        })
        //should respond with a json object containing the new task with an id
        test('should response with an task ID', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.body.id).toBeDefined()
        })
    })

    describe('when a title and description missing', () => {
        test('should respond with 400 status code', async () => {
            const fields = [
                {},
                { titulo: '' },
                { description: '' }
            ]
            for (const body of fields) {
                const response = await request(app).post('/tasks').send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })

})

describe('GET /test', () => {
    test('should respond 200 status code', async () => {
        const response = await request(app).get('/test').send()
        expect(response.statusCode).toBe(200)
    })
})