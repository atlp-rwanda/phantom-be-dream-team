import app from './app.js';
import express from 'express';
import route from './routes/index';
import 'dotenv/config';

// const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

route(app);

// const PORT =3000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});


