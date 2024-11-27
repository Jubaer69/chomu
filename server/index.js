import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { database } from './lib/db.js';
dotenv.config()
import postRouter from './router/post.route.js'


const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const corsconfig= {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsconfig))

const PORT = process.env.PORT || 3000;




app.get('/', (req,res) => {
    res.send('this is server')
})

app.use('/api/v4/post', postRouter)

app.listen(PORT, () => {
    database()
    console.log(`Server running on port ${PORT}`)
})

