import express from 'express';
import postRoutes from './Routes/posts.js';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use('/api/posts', postRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Memories API');
});
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)}))
.catch((error)=>console.log(error.message));