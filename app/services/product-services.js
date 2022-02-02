import Service from '@ember/service';
import { dProducts, dPromos } from 'EmberTrueProject/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return this.products.filterBy((word) => word == 'true');
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    return this.activeServices.reduce((sum, product) => sum + product.price, 0);
    /* <=>
    let sum = 0;
    for (int i = 0 ; i < this.activeServices.length ; i++) {
      sum += this.activeServices[i].price;
    }
    return sum;
     */
  }
}
