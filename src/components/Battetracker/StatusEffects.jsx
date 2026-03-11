import Checkbox from "./Checkbox";
import statusEffectsList from "../../store/statusEffectsList";
import ACTIONS from "../../store/actions";

function StatusEffects({ status, dispatch, id }) {
  return (
    <>
      <div className="grid grid-cols-4 w-120">
        {statusEffectsList.map((statusEffect) => (
          <Checkbox
            key={statusEffect}
            statusEffect={statusEffect}
            status={status}
            dispatch={dispatch}
            id={id}
          />
        ))}
      </div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CLEAR_STATUS, payload: { id } })
        }
        className="bg-slate-700 hover:bg-red-900 my-2 px-2 border-2 rounded-md text-slate-100 transition-colors duration-200"
      >
        clear
      </button>
    </>
  );
}

export default StatusEffects;
