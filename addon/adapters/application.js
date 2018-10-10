import ENV from "ember-get-config";
import ActiveModelAdapter from "active-model-adapter";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { RESTAdapterMixin } from "ember-data-has-many-query";

export default ActiveModelAdapter.extend(DataAdapterMixin, RESTAdapterMixin, {
  host: ENV.apiHost,
  namespace: ENV.apiNamespace,
  authorizer: "authorizer:application"
});
