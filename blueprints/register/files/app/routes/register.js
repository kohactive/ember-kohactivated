import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'ember-get-config';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),
  flashMessages: service(),
  session: service(),
  store: service(),

  model() {
    return EmberObject.create({
      email: null,
      password: null,
      passwordConfirmation: null,
      termsAccepted: false
    });
  },

  actions: {
    signUp(user) {
      if (!this._validRegistration(user)) {
        this.get('flashMessages').add({
          message: 'Unable to register. Please check your email address and make sure your password confirmation is correct and you accepted the terms and conditions.',
          type: 'warning'
        });

        return false;
      }

      const endpoint = `${ENV.apiFullPath}/auth`;

      return this.get('ajax').post(endpoint, {
        data: {
          user: {
            email: user.email,
            password: user.password
          }
        } })
        .then(() => this._authenticate(user))
        .catch(e => this._showErrors(e.payload));
    }
  },

  _validRegistration(user) {
    const emailPresent = user.email && user.email.length > 7;
    const passwordConfirmed = user.password === user.passwordConfirmation;
    const { termsAccepted } = user;
    return emailPresent && passwordConfirmed && termsAccepted;
  },

  _authenticate(user) {
    let { email, password } = user;
    this.get('session').authenticate('authenticator:application', email, password)
      .then(() => this.handleEventTransition())
      .catch((e) => this._showErrors(e));
  },

  handleEventTransition() {
    // this.transitionTo('dashboard');
  },

  _showErrors(e) {
    console.log(e); // eslint-disable-line
    const { errors } = e;
    const type = 'danger';
    errors.messages.forEach(message => this.get('flashMessages').add({ message, type }));
  }
});