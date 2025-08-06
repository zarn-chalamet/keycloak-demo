export const authConfig = {
  clientId: "oauth2-pkce-flow",
  authorizationEndpoint:
    "http://localhost:8181/realms/myrealm/protocol/openid-connect/auth",
  tokenEndpoint:
    "http://localhost:8181/realms/myrealm/protocol/openid-connect/token",
  redirectUri: "http://localhost:5173",
  scope: "openid profile email offline_access",
  logoutEndpoint:
    "http://localhost:8181/realms/myrealm/protocol/openid-connect/logout",
  onRefreshTokenExpire: (event) => event.LogIn(),
};
