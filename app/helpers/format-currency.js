import Ember from 'ember';

export function formatCurrency([value, ...rest]) {
  let dollars = Math.floor(value);
  let cents = value % 100;
  let sign = '$';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}`;
}

export default Ember.Helper.helper(formatCurrency);