const express = require('express')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

dotEnv.config()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname})
    console.log("app working successfully")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is connected and running at PORT ${PORT}`)
})