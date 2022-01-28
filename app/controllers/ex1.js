import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Entrez votre texte';
  @tracked info = '';
  MAX = 100;

  get size() {
    return 100 - this.content.length;
  }

  get style() {
    if (this.size() < 50) {
      if (this.size() < 20) {
        return 'danger';
      }
      return 'warning';
    }
    return null;
  }

  get info() {
    return false;
  }

  @action
  test() {
    this.content = 'test action avec les trwaptipwin';
  }
}
