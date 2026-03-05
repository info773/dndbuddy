import ACTIONS from "../store/actions";

function Monster({ name, init, hp, id, dispatch }) {
  return (
    <div className="flex gap-2 p-1">
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_MONSTER, payload: id })}
        className="bg-slate-900 hover:bg-slate-700 border-2 rounded-full w-7 h-7 text-slate-300 transition-colors duration-150"
      >
        X
      </button>
      <input
        type="text"
        value={name}
        className="bg-slate-300 border-2 rounded-md w-36"
        onChange={(e) =>
          dispatch({
            type: ACTIONS.CHANGE_MONSTER,
            payload: { id: id, prop: "name", value: e.target.value },
          })
        }
      />
      <input
        type="text"
        value={init}
        className="bg-slate-300 border-2 rounded-md w-36"
        onChange={(e) =>
          dispatch({
            type: ACTIONS.CHANGE_MONSTER,
            payload: { id: id, prop: "init", value: e.target.value },
          })
        }
      />
      <input
        type="text"
        value={hp}
        className="bg-slate-300 border-2 rounded-md w-36"
        onChange={(e) =>
          dispatch({
            type: ACTIONS.CHANGE_MONSTER,
            payload: { id: id, prop: "hp", value: e.target.value },
          })
        }
      />
    </div>
  );
}

export default Monster;
