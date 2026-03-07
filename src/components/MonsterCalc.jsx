import { useState } from "react";
import ACTIONS from "../store/actions";

function MonsterCalc({ dispatch, id }) {
  const [hp, setHp] = useState("");

  function handleHp(actionType) {
    if (hp === "" || !Number.isInteger(Number(hp))) {
      return console.log("Invalid input: ", { hp });
    }

    dispatch({ type: actionType, payload: { hp, id } });
    setHp("");
  }

  return (
    <div className="flex gap-1 mx-4">
      <button
        onClick={() => handleHp(ACTIONS.SUBSTRACT_MONSTER_HP)}
        className="bg-slate-700 hover:bg-red-900 px-2 border-2 rounded-md text-slate-100 transition-colors duration-200"
      >
        -
      </button>
      <input
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="bg-slate-300 border-2 rounded-md w-15 text-center"
      />
      <button
        onClick={() => handleHp(ACTIONS.ADD_MONSTER_HP)}
        className="bg-slate-700 hover:bg-emerald-800 px-2 border-2 rounded-md text-slate-100"
      >
        +
      </button>
    </div>
  );
}

export default MonsterCalc;
