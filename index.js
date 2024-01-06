const express = require('express')
const PORT = 8000
const app = express()

app.use(express.json())

app.get( '/getData', (req, res) => {

    return res.status(200).json({ data: { message: "Deplyed to AWS!" } })

} )

app.post( '/postData', (req, res) => {
    console.log(req.body)
    return res.status(200).json({ data: req.body })
} )

app.listen( PORT, () => {
    console.log("Server is running successfully!")
} )

