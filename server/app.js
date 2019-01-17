/**
 * @file App index
 */

import createError from "http-errors";
import express from "express";
import path from "path";

import appRoutes from "./services/app";

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(appRoutes);
// TODO: add authentication routes
app.use(function(req, res, next) {
  next(createError.NotFound());
});
app.use(logErrors);
app.use(function(err, req, res, next) {
  if (err instanceof createError.NotFound) {
    console.log("TODO: handle 404 error");
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
