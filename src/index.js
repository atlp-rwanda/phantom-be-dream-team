import app from './app';
import config from './config/config';

const currentConfig = config[process.env.NODE_ENV];
const {port} = currentConfig;

const App = app.listen(port, () =>
  console.log(`App listening on ${port}!....`),
);

export default App;