import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,PATCH,PUT,POST,DELETE',
  optionsSuccessStatus: 204,
  credentials: true
}))
app.use(cookieParser())
app.use('/api', authRoutes)
app.use('/api', taskRoutes)
export default app
