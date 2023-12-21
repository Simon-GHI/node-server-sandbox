import express, { Express } from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
// Application
import { ApplicationConfiguration } from '@application/configuration/configuration.js';
// Controllers
import { pokemonRoutes } from '@controllers/pokemon-controller.js';
import {
  errorHandler,
  notFoundHandler,
} from '@controllers/error-handler-controller.js';

const app: Express = express();
const appConfig: ApplicationConfiguration = initAppConfig();

// Start server & init middlewares (Logger, JSON parser, URL encoded parser)
app.listen(appConfig.port, () => {
  console.log(
    `[server] Server is running at http://localhost:${appConfig.port}`
  );
});
if (appConfig.apiLogger) {
  app.use(logger('[server] :method :url :status - :response-time ms'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APIs & handlers
app.use(`${appConfig.baseURL}/pokemon`, pokemonRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

function initAppConfig(): ApplicationConfiguration {
  dotenv.config();
  const port = Number(process.env['PORT']) || 3000;
  if (isNaN(port)) {
    throw new Error('Application configuration: Invalid port number');
  }
  const baseURL = process.env['BASE_URL'] || '/api/v1';
  const apiLogger: boolean = Boolean(process.env['API_LOGGER']) || false;

  return {
    port,
    baseURL,
    apiLogger,
  };
}
