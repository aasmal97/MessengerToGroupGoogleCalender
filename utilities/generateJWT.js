const jose = require("jose");
const generateJWT = async (payload) => {
  const privateKey = process.env.TOKEN_GENERATOR_PRIVATE_KEY;
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "ES256" })
    .setIssuedAt()
    .setIssuer("messengertogooglecalender.arkyasmal.com")
    .setAudience("messengertogooglecalender.arkyasmal.com")
    .sign(privateKey);
};
module.exports = generateJWT