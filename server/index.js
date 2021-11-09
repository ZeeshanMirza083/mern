const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

const arr = [
    { id: 1, name: 'zeeshan', city: 'zafarwal' },
    { id: 2, name: 'ali', city: 'narowal' },
    { id: 3, name: 'rizwan', city: 'sadaqabad' },
    { id: 4, name: 'gilman', city: 'test' },
    { id: 5, name: 'rehan', city: 'test' },
]

app.get('/', (req, res) => {
    res.json(arr)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})