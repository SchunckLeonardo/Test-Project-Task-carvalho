import express from 'express'

export const router = express.Router()

router.get('/users', (req, res) => {
  res.send('Hello from users')
})
