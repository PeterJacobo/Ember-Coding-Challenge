import { helper } from '@ember/component/helper';

export function topProspects([customers]) {
  // Get up to 5 customers with the largest budgets
  return customers.sortBy('budget').reverse().slice(1,6);
}

export default helper(topProspects);
