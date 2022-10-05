// import
// const router = Router();

// const getCalenderData = async (connection) => {
//   return;
// };
// //get messenger chat data
// const getMessengerData = async (connection) => {
//   return;
// };
// const getConnectionData = async (connection) => {
//   const calenderData = await getCalenderData(connection);
//   const messengerData = await getMessengerData(connection);
//   return { calenderData, messengerData };
// };
// const getIntegrationData = async (e) => {
//   const token = e.headers.Authorization;
//   if (!token) return;
//   //search database for channel data
//   const config = {};
//   //return results of watched calender and messenger info
//   const results = await requestWrapper(config);
//   if (!results || !Array.isArray(results)) return [];
//   const parsedData = results.map(getConnectionData);
//   const data = await Promise.all(parsedData);
//   return data;
// };
// router.get("/", getIntegrationData);
// //get google calender data
// export{
//   integrationResource: router,
//   getIntegrationData,
//   getConnectionData,
//   getCalenderData,
// };
