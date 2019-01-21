/**
 * @file App index
 */

import path from "path";

import express from "express";
import httpErrors from "http-errors";

import * as Promise from "bluebird";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Layout from "../src/components/Layout/Layout";
import ErrorNotFound from "../src/components/ErrorNotFound";
import withHtmlTemplate from "../src/templates/withHtmlTemplate";

import appRoutes from "./services/app";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(appRoutes({ renderRoute }));

/* Default 404 handler */
app.use(function(req, res, next) {
  next(httpErrors.NotFound());
});

/* Error handling */
app.use(function(err, req, res, next) {
  if (err instanceof httpErrors.NotFound) {
    return Promise.try(() => {
      return renderToString(<ErrorNotFound />);
    }).then(renderedString => {
      res.send(withHtmlTemplate(renderedString));
    });
  } else {
    next(err);
  }
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

function renderRoute(req, res) {
  return Promise.try(() => {
    const context = {};
    return renderToString(
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    );
  }).then(renderedString => {
    res.send(withHtmlTemplate(renderedString));
  });
}
