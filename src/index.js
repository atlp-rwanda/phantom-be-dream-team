import app from './app.js';
import express from 'express';
import route from './routes/index'

// const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

const port = 3000;

app.listen(port, () => {
  console.log('App is now running at port ', port)
})