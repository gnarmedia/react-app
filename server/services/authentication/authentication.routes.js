/**
 * @file Authentication service
 */

import expressPromiseRouter from "express-promise-router";

const router = expressPromiseRouter();

router.post("/sign-up", (req, res) => {
  console.log("sign up action");
});

export default router;
