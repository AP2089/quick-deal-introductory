import * as dotenv from 'dotenv';

dotenv.config({
  path: `../../.env.${process.env.NODE_ENV}`
});

import jsonServer from 'json-server';
import path from 'path';
import bodyParser from 'body-parser';

const server = jsonServer.create();
const dbPath = path.join(process.cwd(), 'src', 'db.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();
const port = process.env.VITE_APP_SERVER_PORT || 9000;

server.use(middlewares);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api', router);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});