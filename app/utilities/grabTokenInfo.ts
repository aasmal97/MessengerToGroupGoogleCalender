import { Request } from "express";
import decode from "jwt-decode";
export interface AppJWT {
  [key: string]:
    | string
    | undefined
    | {
        [key: string]: string;
      };
  messengerToken?: string;
  googleToken?: string;
}
export interface TokenInfo {
  token: string;
  messengerToken?: string;
  googleToken?: string;
  decodedToken: AppJWT;
  messengerTokenInfo?: { [key: string]: string };
  googleTokenInfo?: { [key: string]: string };
}
export const grabTokenInfo = (token: string) => {
  const decodedToken = decode<AppJWT>(token);
  const { messengerToken, googleToken } = decodedToken;
  const result: TokenInfo = {
    token,
    messengerToken,
    googleToken,
    decodedToken,
  };
  if (result.messengerToken)
    result.messengerTokenInfo = decode(result.messengerToken);
  if (result.googleToken) result.googleTokenInfo = decode(result.googleToken);
  return result;
};
const grabEventTokenInfo = (e: Request) => {
  const { token } = e.params;
  return grabTokenInfo(token);
};
export default grabEventTokenInfo;
