import bodyParser from 'body-parser';
import express from 'express';
import booksRouter from './routes/books';
import articlesRouter from './routes/articles';
import usersRouter from './routes/users';
import datasource from './config/datasource';
import config from './config/config';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', 3000);

app.use(bodyParser.json());

booksRouter(app);
usersRouter(app);
articlesRouter(app);

export default app;
