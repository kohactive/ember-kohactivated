import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),
  showFlashMessages: service(),
  session: service(),

  model() {
    return EmberObject.create({
      email: null,
      password: null
    });
  },

  actions: {
    authenticate(user) {
      let { email, password } = user;
      this.get('session').authenticate('authenticator:application', email, password)
        .catch((e) => this.showFlashMessages.showErrors(e));
    }
  }
});