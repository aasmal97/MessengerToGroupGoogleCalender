const requestWrapper = require("../../utilities/requestWrapper");
const getCalenders = async (e) => {
  const { googleToken } = e.params;
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
module.exports = {
  getCalenders,
};
