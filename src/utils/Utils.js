import jwt_decode from "jwt-decode";

export const getUserInformation = () => {
  const jwt = localStorage.getItem("jwt");
  if(jwt){
    const decodedJwt = jwt_decode(jwt);
    decodedJwt['jwt'] = jwt;
    return decodedJwt
  }
  return null;
};

