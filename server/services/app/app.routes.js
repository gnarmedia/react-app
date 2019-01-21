/**
 * @file App routes
 */

import expressPromiseRouter from "express-promise-router";

const router = expressPromiseRouter();

const routes = ({ renderRoute }) => {
  router.get("/", renderRoute);
  router.get("/about", renderRoute);
  router.get("/contact", renderRoute);
  router.get("/sign-up", renderRoute);
  router.get("/sign-in", renderRoute);

  return router;
};

export default routes;
