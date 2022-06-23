import app from './app.js';
import express from 'express';
import route from './routes/index'
import 'dotenv/config';

// const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//To listen the server
app.listen(process.env.PORT || 3000);
console.log("Listening to port 3000");