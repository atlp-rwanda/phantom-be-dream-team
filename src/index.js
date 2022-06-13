import app from './app.js';
import 'dotenv/config';
// const PORT =3000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
