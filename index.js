const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())
app.use(fileUpload())

app.post('/extract', (req, res)=>{
    if(!req.files && !req.files.pdfFile){
        res.status(400)
        res.end
    }
    pdfParse(req.files.pdfFile).then((result)=>{
        res.send(result.text)
    })

})
// app.use('/', express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))