import { helper } from '@ember/component/helper';

export function totalBudget([customers]) {

  let budgetArray = customers.mapBy('budget');
  let sum = 0;

  for( let el in budgetArray ) {
    if( budgetArray.hasOwnProperty( el ) ) {
      sum += parseFloat( budgetArray[el] );
    }
  }
  return sum;
}

export default helper(totalBudget);
