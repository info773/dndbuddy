import ACTIONS from "../../store/actions";
import MonsterCalc from "./MonsterCalc";
import MonsterNotes from "./MonsterNotes";
import StatusEffects from "./StatusEffects";
import StatusOverview from "./StatusOverview";

function Monster({
  name,
  init,
  hp,
  id,
  notes,
  status,
  dispatch,
  openNotesId,
  setOpenNotesId,
}) {
  const notesOpened = openNotesId === id;

  return (
    <div>
      <div className="flex gap-2 p-1">
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_MONSTER, payload: id })
          }
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
        <button
          className={`px-2 border-2 rounded-md transition-colors duration-200
    ${
      notesOpened
        ? "bg-slate-700 text-slate-100"
        : "bg-slate-300 text-slate-900 hover:bg-slate-700 hover:text-slate-100"
    }`}
          onClick={() => setOpenNotesId(notesOpened ? null : id)}
        >
          {notes.length === 0 ? "..." : "!!!"}
        </button>

        <MonsterCalc dispatch={dispatch} />
        <StatusOverview status={status} />
      </div>
      {notesOpened ? (
        <div className="mx-10 my-1 mb-4">
          <MonsterNotes notes={notes} dispatch={dispatch} id={id} />
          <StatusEffects status={status} dispatch={dispatch} id={id} />
        </div>
      ) : null}
    </div>
  );
}

export default Monster;
