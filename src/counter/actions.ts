import { ActionTypes } from './module';

export const increment = (amount: number) => {
  return { type: ActionTypes.INCREMENT, amount: amount };
};

export const decrement = (amount: number) => {
  return { type: ActionTypes.DECREMENT, amount: amount };
};
