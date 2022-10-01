const { Router } = require("express");
const decode = require("jwt-decode");
const router = Router();
router.get("/:token/:groupChatId", (e) => {
  const { token, groupChatId } = e.params;
    const decodedToken = decode(token);
    
});
router.post("/event-callback", (e) => {});
module.exports = router;
