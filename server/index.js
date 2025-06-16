import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
const CONNECTION_URL = "mongodb+srv://bhumeshmahajan01:267Ktrx9VYGZz3fI@mycluster.jta6k4p.mongodb.net/";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)}))
.catch((error)=>console.log(error.message));