import 'isomorphic-fetch';

// constants
export interface CounterState {
  num: number;
  loadingCount: number;
};

interface JsonObject {
  amount: number;
}

interface MyAction {
  type: string;
  amount?: number;
};

class ActionTypes {
  static INCREMENT = 'counter/increment';
  static DECREMENT = 'counter/decrement';
  static FETCH_REQUEST_START = 'counter/fetch_request_start';
  static FETCH_REQUEST_FINISH = 'counter/fetch_request_finish';
};

// ActionDispatcher
const myHeaders = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
});

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

  public async fetchAmount(): Promise<void> {
    this.dispatch({type: ActionTypes.FETCH_REQUEST_START});

    try {
      const response: Response = await fetch('//localhost:3000/api/count', {
        method: 'GET',
        headers: myHeaders,
        // credentials: 'include',
      });

      if (response.status === 200) { //2xx
        const json: JsonObject = await response.json();
        this.dispatch({type: ActionTypes.INCREMENT, amount: json.amount})
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.dispatch({type: ActionTypes.FETCH_REQUEST_FINISH})
    }
  }
}

// reducer
const initialState: CounterState = { num: 0, loadingCount: 0 };

export default function reducer(state: CounterState = initialState, action: MyAction): CounterState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return Object.assign({}, state, { num: state.num + action.amount });
    case ActionTypes.DECREMENT:
      return Object.assign({}, state, { num: state.num - action.amount });
    case ActionTypes.FETCH_REQUEST_START:
      return Object.assign({}, state, { loadingCount: state.loadingCount + 1 });
    case ActionTypes.FETCH_REQUEST_FINISH:
      return Object.assign({}, state, { loadingCount: state.loadingCount - 1 });
    default:
      return state;
  }
};
