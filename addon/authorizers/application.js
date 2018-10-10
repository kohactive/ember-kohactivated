import { isEmpty } from "@ember/utils";
import DeviseAuthorizer from "ember-simple-auth/authorizers/devise";

export default DeviseAuthorizer.extend({
  authorize(data, header) {
    let { token, client, uid } = data;

    if (!isEmpty(token) && !isEmpty(client) && !isEmpty(uid)) {
      header("access-token", token);
      header("client", client);
      header("uid", uid);
    }
  }
});
