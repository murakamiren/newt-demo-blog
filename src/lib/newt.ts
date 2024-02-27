import { createClient } from "newt-client-js";
import { NEWT_API_TOKEN, NEWT_SPACE_UID } from "../config/env";

export const newtClient = createClient({
	spaceUid: NEWT_SPACE_UID,
	token: NEWT_API_TOKEN,
	apiType: "cdn",
});
