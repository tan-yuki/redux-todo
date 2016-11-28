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
    default:
      return state;
  }
};
