import { Request } from "express";
import grabTokenInfo from "../../utilities/grabTokenInfo";
import requestWrapper from "../../utilities/requestWrapper";
const stopWatchingCalender = async (e: Request) => {
  const { channelId, resourceId } = e.params;
  const { googleToken } = grabTokenInfo(e);
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
export default stopWatchingCalender;
