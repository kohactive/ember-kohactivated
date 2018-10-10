import ENV from "ember-get-config";
import ActiveModelAdapter from "active-model-adapter";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: ENV.apiHost,
  namespace: ENV.apiNamespace,
  authorizer: "authorizer:application"
});
