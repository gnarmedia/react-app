import actions from "./authentication.actions";
import routes from "./authentication.routes";
import { renderView } from "../../helpers/ssr";

export default routes({ actions, renderView });
