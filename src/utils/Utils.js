import jwt_decode from "jwt-decode";

export const getUserInformation = () => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    const decodedJwt = jwt_decode(jwt);
    decodedJwt["jwt"] = jwt;
    return decodedJwt;
  }
  return null;
};

export const isTokenExpired = () => {
  const userInformation = getUserInformation();
  if (userInformation) {
    const token = userInformation.jwt;
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    const isExpired = Math.floor(new Date().getTime() / 1000) >= expiry;
    return isExpired;
  }
  return true;
};
