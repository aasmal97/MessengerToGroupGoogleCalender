const requestWrapper = require("../../utilities/requestWrapper");
const watchCallback = async (e) => {
  const headers = e.headers;
  const token = headers["X-Goog-Channel-Token"];
  const { googleToken, messengerToken } = token;
  const channelId = headers["X-Goog-Channel-ID"];
  const resourceId = headers["X-Goog-Resource-ID"];
  const messageNum = headers["X-Goog-Message-Number"];
  const uri = headers["X-Goog-Resource-URI"];
  const state = headers["X-Goog-Resource-State"];
  if (state !== "exists") return;
  const config = {
    url: uri,
    method: "get",
    params: {
      syncToken: googleToken,
    },
  };
  const calenderData = await requestWrapper(config);
  if (!calenderData) return;
  const events = calenderData.items;
  //remember to filter out using message number, or show most recent events
  return events;
};
module.exports = watchCallback;
