/**
 * @file App routes
 */

import expressPromiseRouter from "express-promise-router";

import { renderView } from "../../helpers/ssr";

const router = expressPromiseRouter();

router.get("/", renderView);
router.get("/about", renderView);
router.get("/contact", renderView);
router.get("/sign-up", renderView);
router.get("/sign-in", renderView);

export default router;
