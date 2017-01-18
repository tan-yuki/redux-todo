const initialTodos = [
  {"id": 1, "name": "apple", "checked": false},
  {"id": 2, "name": "orange", "checked": true},
  {"id": 3, "name": "banana", "checked": false}
];

let maxId = initialTodos.length;

/*
 * state:
 * [
 *   {
 *     id: number,
 *     name: string,
 *     checked: boolean
 *    }
 * ]
 */
export default (state = initialTodos, action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id === action.id) {
          return Object.assign({}, t, {
            checked: !t.checked
          });
        }

        return t;
      });
    case 'ADD_TODO':
      let newTodo = {
        id: maxId + 1,
        name: action.name,
        checked: false
      };

      maxId++;

      return [
        ...state, newTodo
      ];
    case 'UPDATE_TODO':
      return state.map((t) => {
        if (t.id === action.id) {
          return Object.assign({}, t, {
            name: action.name
          });
        }

        return t;
      });
    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
