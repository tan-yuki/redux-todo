import assgin from 'object-assign';

const initialTodos = [
  {"id": 1, "name": "牛乳", "checked": false},
  {"id": 2, "name": "砂糖", "checked": true},
  {"id": 3, "name": "洗剤", "checked": false}
];

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
          return assgin({}, t, {
            checked: !t.checked
          });
        }

        return t;
      });
    case 'ADD_TODO':
      let newTodo = {
        id: state.length + 1,
        name: action.title,
        checked: false
      };

      return [
        ...state, newTodo
      ];
    default:
      return state;
  }
};
