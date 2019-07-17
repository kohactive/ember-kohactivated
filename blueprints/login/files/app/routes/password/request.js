import Route from '@ember/routing/route';
import ENV from 'ember-get-config';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),
  showFlashMessages: service(),

  actions: {
    requestReset() {
      let endpoint = ENV.apiPasswordEndpoint;
      let redirect_url = '/password/reset';
      return this.get('ajax').post(endpoint, {
        data: {
          user: {
            email: this.get('controller.email')
          },
          redirect_url: redirect_url
        }
      })
        .then(() => this.resetRequestSent())
        .catch((e) => this.handleError(e));
    }
  },

  resetRequestSent() {
    let successMessage = 'Your password reset request was successful. You should receive instruction in your email shortly.';
    this.showFlashMessages.showSuccess(successMessage);
    this.transitionTo('index');
  },

  handleError(e) {
    this.showFlashMessages.showErrors(e);
  }
});