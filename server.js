import express from 'express';
import fs from 'fs';
const app = express()
const port = 3000
app.use(express.static('.'));
app.use(express.json())

app.post('/hi', (req, res) => {
    console.log(req.body)
    fs.writeFile('words.json', JSON.stringify(req.body), function callback(err) {
      console.log("err:", err)
      console.log('fileSaved')
    })
    res.send('Hello World!')
})

app.get('/end', (req, res) => {
  res.send({ teacher: 'big_boss', say: 'ever' })
})

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})