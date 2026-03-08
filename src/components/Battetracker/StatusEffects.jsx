import Checkbox from "./Checkbox";
import statusEffectsList from "../../store/statusEffectsList";

function StatusEffects({ status, dispatch, id }) {
  return (
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
  );
}

export default StatusEffects;
