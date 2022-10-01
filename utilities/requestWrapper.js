const axios = require("axios");
const requestWrapper = async (body) => {
try {
    const result = await axios.config(body)
    return result
} catch (e) {
  console.error(e);
  console.trace(e);
}
}
module.exports = requestWrapper
