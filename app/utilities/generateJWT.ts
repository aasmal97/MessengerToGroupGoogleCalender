import jose from "jose";
import { AppJWT } from "./grabTokenInfo";
const generateJWT = async (payload: AppJWT): Promise<string> => {
  const privateKey = process.env.TOKEN_GENERATOR_PRIVATE_KEY;
  if (!privateKey) return "";
  const encodedKey = new TextEncoder().encode(privateKey);
  const result = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "ES256" })
    .setIssuedAt()
    .setIssuer("messengertogooglecalender.arkyasmal.com")
    .setAudience("messengertogooglecalender.arkyasmal.com")
    .sign(encodedKey);
  return result;
};
export default generateJWT;
