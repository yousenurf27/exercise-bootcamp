import express from 'express'
const app = express()

app.use((req, res, next) => {
  console.log(`Date: ${Date.now()}`)
  next()
})

app.use((req, res, next) => {
  console.log(`Date: ${req.method}`)
  next()
})

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(3000)