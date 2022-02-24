import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Contacts from '../classes/contacts';

export default class ContactsRoute extends Route {
  @service store;

  model() {
    return new Contacts(this.store.findAll('contact'));
  }

  @action add(name, surname, mail) {
    let contact = this.store.createRecord('contact', {
      nom: surname,
      prenom: name,
      email: mail,
    });
    contact.save();
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletion(contact) {
    contact.forEach((c) => {
      c.rollbackAttributes();
    });
  }

  @action saveDeletion(contact) {
    contact.forEach((c) => {
      c.save();
    });
  }
}
