/**
 * @file App index
 */

import express from "express";
import path from "path";

import appRoutes from "./services/app";

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(appRoutes);
// TODO: add authentication routes

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
