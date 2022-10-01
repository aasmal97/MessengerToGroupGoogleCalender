const { Router } = require("express");
const {getCalenders } = require("./getCalenders");
const stopWatchingCalender = require("./stopWatchingCalender");
const watchCalender = require("./watchCalender");
const watchCallback = require("./watchCallback");
const router = Router();
router.get("/calender/:googleToken", getCalenders)
router.put("/watchCalender/:googleToken/:messengerToken/:resourceId", watchCalender);
router.post("/watchCallback", watchCallback);
router.delete("/watchCalender/:channelId/:resourceId", stopWatchingCalender);

module.exports = router;
