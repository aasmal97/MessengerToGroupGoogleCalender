import requestWrapper from "../../utilities/requestWrapper";
import { Request } from "express";
import grabTokenInfo from "../../utilities/grabTokenInfo";
const getCalenders = async (e: Request) => {
  const { googleToken } = grabTokenInfo(e)
  const googleCalenderPath = process.env.GOOGLE_CALENDER_ROUTE;
  const url = `${googleCalenderPath}/users/me/calendarList`;
  const config = {
    headers: {
      Authorization: `Bearer ${googleToken}`,
    },
    url: url,
  };
  const result = await requestWrapper(config);
  if (!result) return [];
};
export { getCalenders };
