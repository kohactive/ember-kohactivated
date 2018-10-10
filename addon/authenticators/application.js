import ENV from "ember-get-config";
import DeviseAuthenticator from "ember-simple-auth/authenticators/devise";

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: ENV.apiAuthEndpoint
});
