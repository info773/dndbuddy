import ACTIONS from "../store/actions";

function MonsterFilter({ dispatch }) {
  return (
    <select
      onChange={(e) =>
        dispatch({
          type: ACTIONS.CHANGE_MONSTER_FILTER,
          payload: e.target.value,
        })
      }
      className="bg-slate-300 hover:bg-slate-200 mx-10 my-4 p-0.5 border-2 rounded-md transition-colors duration-150"
    >
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
      <option value="nameAz">Name (A-Z)</option>
      <option value="nameZa">Name (Z-A)</option>
    </select>
  );
}

export default MonsterFilter;
