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

// TODO: could be abstracted better perhaps...
router.get("/", renderRoute);
router.get("/about", renderRoute);
router.get("/contact", renderRoute);
// router.get("/sign-up", renderRoute);
router.get("/sign-in", renderRoute);

export default router;
