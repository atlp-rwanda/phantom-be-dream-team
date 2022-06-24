import app from './app';
import config from './config/config';

const currentConfig = config[process.env.NODE_ENV];
const {port} = currentConfig;

const App = app.listen(3000, () =>
  console.log(`App listening on 3000!....`),
);

export default App;
