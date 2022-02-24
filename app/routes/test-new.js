import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  @service store;

  model() {
    let find = this.store.findAll('contact');
    return find;
  }

  @action add(name, surname, mail) {
    let contact = this.store.createRecord('contact', {
      nom: surname,
      prenom: name,
      email: mail,
    });
    contact.save();
  }
}
