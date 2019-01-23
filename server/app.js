/**
 * @file App index
 */

import path from "path";

import express from "express";
import httpErrors from "http-errors";

import errorHandler from "./helpers/errorHandler";

import appRoutes from "./services/app";
import authenticationRoutes from "./services/authentication";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(appRoutes);
app.use(authenticationRoutes);

/* Default 404 handler */
app.use((req, res, next) => {
  next(httpErrors.NotFound());
});

/* Error handling */
app.use(errorHandler);

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
