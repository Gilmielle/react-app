import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(compression());

app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false,
}));

app.use('/static', express.static('./dist/client'));

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})