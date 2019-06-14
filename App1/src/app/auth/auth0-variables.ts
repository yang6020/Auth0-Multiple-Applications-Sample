const config = require('../../../../config.json')

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: config.app1.clientID,
  domain: config.domain,
  callbackURL: 'http://localhost:3000/callback'
};
