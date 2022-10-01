const requestWrapper = require("../../utilities/requestWrapper");
const stopWatchingCalender = async (e) => {
  const { googleToken, channelId, resourceId } = e.params;
  const config = {
    url: "https://www.googleapis.com/calendar/v3/channels/stop",
    method: "post",
    headers: {
      Authorization: `Bearer ${googleToken}`,
    },
    body: {
      id: channelId,
      resourceId: resourceId,
    },
  };
  const result = await requestWrapper(config);
  return result;
};
module.exports = stopWatchingCalender;
