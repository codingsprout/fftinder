import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './cards.js'

const app = express()
const port = process.env.PORT || 8001;
const DB_URL = 'mongodb+srv://admin:1234@cluster0.xvn4u.mongodb.net/Cluster0?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())


app.get('/', (req, res) => {
    res.status(200).send("Testing...")
})

app.post('/tinder/card', (req, res) => {
    
    const dbcard = req.body
    Cards.create(dbcard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => {

    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});