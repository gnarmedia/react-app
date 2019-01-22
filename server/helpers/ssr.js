/**
 * @file Serverside Rendering helper
 */

import * as Promise from "bluebird";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import ErrorNotFound from "../../src/components/ErrorNotFound";

import Layout from "../../src/components/Layout/Layout";
import withHtmlTemplate from "../../src/templates/withHtmlTemplate";

export function renderView(req, res) {
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

export function render404(req, res) {
  return Promise.try(() => {
    return renderToString(<ErrorNotFound />);
  }).then(renderedString => {
    res.send(withHtmlTemplate(renderedString));
  });
}
