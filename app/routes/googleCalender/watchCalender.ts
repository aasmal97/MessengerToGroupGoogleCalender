import requestWrapper from "../../utilities/requestWrapper";
import {v4 as uuid} from "uuid"
import generateJWT from "../../utilities/generateJWT"
import { Request } from "express";
import grabTokenInfo from "../../utilities/grabTokenInfo";
const watchCalender = async (e: Request) => {
  const { token, googleToken, messengerToken } = grabTokenInfo(e);
  if (!token || !googleToken || !messengerToken) return;
  const {resourceId} = e.params
  const googleRoute = process.env.GOOGLE_ROUTE;
  const resourcePath = `${resourceId}/events`;
  const postURL = `${googleRoute}/${resourcePath}/watch`;
  const uniqueChannelId = uuid();
  const embeddedTokenData = {
    googleToken: googleToken,
    messengerToken: messengerToken,
  };

  const embeddedToken = await generateJWT( embeddedTokenData);

  const config = {
    headers: {
      Authorization: `Bearer ${googleToken}`,
    },
    method: "post",
    url: postURL,
    body: {
      token: embeddedToken,
      id: uniqueChannelId,
      type: "web_hook",
      address: `${process.env.DOMAIN}/googleCalender/event-callback`,
    },
  };
  const result = await requestWrapper(config);
  if (!result) return;
  const expiration = result.expiration;
  const channelId = result.id;
  const googleResourceId = result.resourceId;
  //store in database
  const data = {
    expiration,
    channelId,
    resourceId: googleResourceId,
  };
};
export default watchCalender;
