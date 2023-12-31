import express from 'express'
import { json } from 'body-parser'

import { currnetUserRouter } from './routes/current-user'
import { siginRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'

const app = express()
app.use(json())

app.use(currnetUserRouter)
app.use(siginRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})