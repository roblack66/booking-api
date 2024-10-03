import express from 'express';
import { bookingRouter } from './controllers/routes/all-routes.js';
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();

const PORT = 7070

app.use(express.json())
app.use(bookingRouter)

await mongoose.connect(process.env.MONGO_URI);
app.listen(PORT,() => console.log(`server is listening on ${PORT}`))