export type ADD_TODO                 = "ADD_TODO";
export type DELETE_TODO              = "DELETE_TODO";
export type TOGGLE_TODO              = "TOGGLE_TODO";
export type UPDATE_TODO              = "UPDATE_TODO";
export type FETCH_TODO_REQUEST       = "FETCH_TODO_REQUEST";
export type FETCH_TODO_REQUEST_START = "FETCH_TODO_REQUEST_START";
export type FETCH_TODO_SUCCESS       = "FETCH_TODO_SUCCESS";
export type FETCH_TODO_FAILURE       = "FETCH_TODO_FAILURE";

export type ActionTypes = ADD_TODO                 |
                          DELETE_TODO              |
                          TOGGLE_TODO              |
                          UPDATE_TODO              |
                          FETCH_TODO_REQUEST       |
                          FETCH_TODO_REQUEST_START |
                          FETCH_TODO_SUCCESS       |
                          FETCH_TODO_FAILURE;
