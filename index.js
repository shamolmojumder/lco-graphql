const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Graph QL server running!')
})

app.listen(8082, () => {
  console.log(`Example app listening on port at 8082`)
})
