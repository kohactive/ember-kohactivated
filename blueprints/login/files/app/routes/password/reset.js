import Route from '@ember/routing/route';
import ENV from 'ember-get-config';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),
  session: service(),
  showFlashMessages: service(),

  queryParams: {
    token: {
      refreshModel: false
    },
    email: {
      refreshModel: false
    }
  },

  model(params) {
    let { token } = params;

    return EmberObject.create({
      email: null,
      password: null,
      password_confirmation: null,
      reset_password_token: token
    });
  },

  afterModel(model) {
    this._super(...arguments);

    // Kick people back to the reset password page if they don't have a token
    if (!model.get('reset_password_token')) {
      this.transitionTo('password.request');
    }
  },

  actions: {
    resetPassword(model) {
      let errors = this.validateNewPassword(model);
      if (errors.length) {
        let errorText = htmlSafe(errors.join('<br />'));
        return this.showFlashMessages.showErrors(errorText);
      }

      let params = model.getProperties('reset_password_token', 'password', 'password_confirmation', 'email');

      let endpoint = ENV.apiPasswordEndpoint;
      return this.get('ajax').put(endpoint, {
        data: {
          user: params
        }
      })
        .then(() => this.handlePasswordReset())
        .catch((e) => this.handleError(e));
    }
  },

  validateNewPassword(model) {
    let errors = [];
    let { password, password_confirmation } = model.getProperties('password', 'password_confirmation');

    if (!password) {
      errors.push('Password cannot be blank');
      return errors;
    }

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    if (password !== password_confirmation) {
      errors.push('Password and password confirmation must match');
    }

    return errors;
  },

  handlePasswordReset() {
    let successMessage = 'Your password has been reset. Please login to continue.';
    this.showFlashMessages.showSuccess(successMessage);
    this.transitionTo('index');
  },

  handleError(e) {
    this.showFlashMessages.showErrors(e);
  }
});