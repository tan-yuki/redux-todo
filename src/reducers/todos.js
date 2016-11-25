/*
 * state:
 * [
 *   {
 *     name: string,
 *     checked: boolean
 *    }
 * ]
 */
export default (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id === action.id) {
          return Object.assgin({}, t, {
            checked: !t.checked
          });
        }

        return state;
      });
    default:
      return state;
  }
};
