import {List, Map} from 'immutable';

// export function setEntries(state, entries) {
//   const entries = state.get('entries');
//   return state.merge({
//     vote: map({pair: entries.take(2)}),
//     entries: entries.skip(2)
//     });
//   }


export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}
