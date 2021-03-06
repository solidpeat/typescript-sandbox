import axios, { AxiosResponse } from 'axios';
import { List } from 'immutable';
import {
  MyAction,
  ActionTypes,
  // TodoInterface,
  Todo
} from './Models';

export function changeStatusAction(id: number): MyAction {
  return { type: ActionTypes.CHANGE_TODO_STATUS, id: id }
}

export function addAction(text: string): MyAction {
  return { type: ActionTypes.ADD_TODO, text: text }
}

export function deleteAction(id: number): MyAction {
  return { type: ActionTypes.DELETE_TODO, id: id }
}

export function fetchAllAction() {
  return (dispatch: (action: MyAction) => any) => {
    const failCB = (ex: Error) => {
      console.error(ex);
      dispatch({ type: ActionTypes.FETCH_FAIL })
    };
    // const successCB = (json: Axios.AxiosXHR<TodoInterface[]>) => {
    const successCB = (json: AxiosResponse) => {
      const todos_arr: Todo[] = json.data.map((v: any) => new Todo(v.id, v.text, v.isComplete));
      const todos: List<Todo> = List.of(...todos_arr);
      const action: MyAction = { type: ActionTypes.FETCH_ALL, todos: todos };
      dispatch(action);
    };
    dispatch({ type: ActionTypes.FETCH_REQUEST });
    return axios.get('/api/todos')
      .then(successCB)
      .catch(failCB);
  }
}
