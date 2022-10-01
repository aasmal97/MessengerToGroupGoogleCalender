const requestWrapper = require("../../utilities/requestWrapper");
const { v4: uuid } = require("uuid");
const generateJWT = require("../../utilities/generateJWT");
const watchCalender = async (e) => {
  const token = e.headers.Authorization;
  const { googleToken, messengerToken, resourceId } = e.params;
  if (!token || !googleToken || !messengerToken) return;
  const googleRoute = process.env.GOOGLE_ROUTE;
  const resourcePath = `${resourceId}/events`;
  const postURL = `${googleRoute}/${resourcePath}/watch`;
  const uniqueChannelId = uuid();
  const embeddedTokenData = {
    googleToken: googleToken,
    messengerToken: messengerToken,
  };

  const embeddedToken = await generateJWT(embeddedTokenData);
  
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
module.exports = watchCalender;
