import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'ember-get-config';

export default AjaxService.extend({
  session: service(),

  host: ENV.apiHost,
  namespace: ENV.apiNamespace,

  headers: computed('session.data.authenticated.token', {
    get() {
      let headers = {};
      this.get('session').authorize(
        'authorizer:application',
        (headerName, headerValue) => {
          headers[headerName] = headerValue;
        }
      );
      return headers;
    }
  })
});
