/**
 * @file Authentication routes
 */

import expressPromiseRouter from "express-promise-router";

const router = expressPromiseRouter();

const routes = ({ actions }) => {
  const { signUp } = actions;

  router.post("/sign-up", (req, res) => signUp(req, res));

  return router;
};

export default routes;
