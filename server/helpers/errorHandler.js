/**
 * @file Error handler
 */

import httpErrors from "http-errors";
import { render404 } from "./ssr";

export default function errorHandler(err, req, res, next) {
  if (err instanceof httpErrors.NotFound) {
    return render404(req, res);
  } else {
    next(err);
  }
}
