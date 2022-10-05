import { Router } from "express";
import { getCalenders } from "./getCalenders";
import watchCalender from "./watchCalender";
import stopWatchingCalender from "./stopWatchingCalender";
import watchCallback from "./watchCallback";
const router = Router();
router.get("/calender/:token", getCalenders);
router.put("/watchCalender/:token/:resourceId", watchCalender);
router.delete(
  "/watchCalender/:token/:channelId/:resourceId",
  stopWatchingCalender
);

router.post("/watchCallback", watchCallback);

export default router;
