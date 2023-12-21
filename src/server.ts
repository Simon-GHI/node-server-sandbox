import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// Controllers
// import { getPokemon } from './controllers/pokemon-controller.js';
import { getPokemon } from '@controllers/pokemon-controller.js';

dotenv.config();

export const app: Express = express();
const port = process.env['PORT'] || 3000;

app.get('/', (_: Request, res: Response) => {
  res.send(`Hello World!`);
});

app.get('/pokemon/:id', getPokemon);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
