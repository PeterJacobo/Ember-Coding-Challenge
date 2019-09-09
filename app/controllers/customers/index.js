import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({

  actions: {
    handleFilterEntry() {
      let filterInputValue = Ember.$('#search').val();
      let filterAction = this.filterBySearch;
      filterAction(filterInputValue, this).then((filterResults) => this.set('Body', filterResults));
    },
  },
  filterBySearch(param, param2) {
    if (param !== '') {
      return param2.store.query('customer', { name: param });
    } else {
      return param2.store.findAll('customer');
    }
  },
  sortProperty: 'lastName',

  customersSortProps: computed('sortProperty', function() {
    if (this.sortProperty === 'lastName') {
      // Sort by full name when name sort is selected
      return [this.sortProperty, 'firstName'];
    }
    return [this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps')
});
