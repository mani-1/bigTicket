import express from 'express'

const router = express.Router()

router.post('/api/users/siginout', (req, res) => {
  res.send('Hi from signout page')
})

export {
  router as signoutRouter
} 