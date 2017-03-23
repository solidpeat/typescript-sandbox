// constants
export interface CounterState {
  num: number;
};

interface MyAction {
  type: string;
  amount?: number;
};

class ActionTypes {
  static INCREMENT = 'counter/increment';
  static DECREMENT = 'counter/decrement';
};

// ActionDispatcher
export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public increment(amount: number) {
    this.dispatch({ type: ActionTypes.INCREMENT, amount: amount })
  }

  public decrement(amount: number) {
    this.dispatch({ type: ActionTypes.DECREMENT, amount: amount })
  }
}

// reducer
const initialState: CounterState = { num: 0 };

export default function reducer(state: CounterState = initialState, action: MyAction): CounterState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { num: state.num + action.amount };
    case ActionTypes.DECREMENT:
      return { num: state.num - action.amount };
    default:
      return state;
  }
};
