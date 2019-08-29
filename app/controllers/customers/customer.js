import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    actions: {
        async saveCustomer() {
            await this.model.save();
            this.transitionToRoute('customers.index');
        },
        filterBySearch(param) {
            if (param !== '') {
                return this.store.query('customers', { company: param });
            } else {
                return this.store.findAll('customers');
            }
        }
    }
});
