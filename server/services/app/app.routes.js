/**
 * @file App routes
 */

import expressPromiseRouter from "express-promise-router";

import * as Promise from "bluebird";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Layout from "../../../src/components/Layout/Layout";
import withHtmlTemplate from "../../../src/templates/withHtmlTemplate";

const router = expressPromiseRouter();

// TODO: could be abstracted better perhaps...
router.get("/", (req, res) =>
  Promise.try(function() {
    const context = {};
    const jsx = (
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    );
    return renderToString(jsx);
  }).then(function(renderedString) {
    res.send(withHtmlTemplate(renderedString));
  })
);

router.get("/about", (req, res) =>
  Promise.try(function() {
    const context = {};
    const jsx = (
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    );
    return renderToString(jsx);
  }).then(function(renderedString) {
    res.send(withHtmlTemplate(renderedString));
  })
);

router.get("/contact", (req, res) =>
  Promise.try(function() {
    const context = {};
    const jsx = (
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    );
    return renderToString(jsx);
  }).then(function(renderedString) {
    res.send(withHtmlTemplate(renderedString));
  })
);

export default router;
