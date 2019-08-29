import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
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
