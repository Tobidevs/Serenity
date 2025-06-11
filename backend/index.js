import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on Port:${PORT}`)
})