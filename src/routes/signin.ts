import express from 'express'

const router = express.Router()

router.post('/api/users/sigin', (req, res) => {
  res.send('Hi from sigin page')
})

export {
  router as siginRouter
} 