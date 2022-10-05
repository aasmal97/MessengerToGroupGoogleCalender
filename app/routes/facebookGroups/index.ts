import { Router } from "express";
import decode from "jwt-decode";
import grabEventTokenInfo from "../../utilities/grabTokenInfo";
const router = Router();
router.get("/groups/:token", (e) => {
  const { messengerToken } = grabEventTokenInfo(e);
});
router.post("/event-callback", (e) => {});
export default router;
