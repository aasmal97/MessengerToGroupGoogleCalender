import { Request } from "express-serve-static-core";
import requestWrapper from "../../utilities/requestWrapper";
import { grabTokenInfo } from "../../utilities/grabTokenInfo";
const watchCallback = async (e: Request) => {
  const headers = e.headers;
  const token = headers["X-Goog-Channel-Token"];
  if(typeof token !== "string") return 
  const { googleToken, messengerToken } = grabTokenInfo(token);
  const channelId = headers["X-Goog-Channel-ID"];
  const resourceId = headers["X-Goog-Resource-ID"];
  const messageNum = headers["X-Goog-Message-Number"];
  const uri = headers["X-Goog-Resource-URI"];
  if(typeof uri !== "string") return
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
export default watchCallback;
