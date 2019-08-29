import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    store: service(),
    model() {
        return this.store.findAll('customer', { reload: true });
    },
    topProspects: function() {
        return [1, 2, 3, 4, 5]
    }
});
