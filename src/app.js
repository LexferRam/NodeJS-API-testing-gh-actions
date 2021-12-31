//agregar "type":"module", en package.json para que funcione con ES
//los imports se deben colocar la extension (.js)
import express from 'express';
import { v4 } from 'uuid'

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/tasks', (req, res) => {
    res.json([])
})

app.post('/tasks', (req, res) => {
    const { title, description } = req.body
    if (!title || !description) res.sendStatus(400)
    res.json({ title, description, id: v4() })
})

app.get('/test', (req, res) => {
    res.send('Test lexfer, change endpoint')
})



export default app;