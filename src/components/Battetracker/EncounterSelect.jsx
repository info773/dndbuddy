import { useState } from "react";
import ACTIONS from "../../store/actions";

function EncounterSelect({ encounters, dispatch, activeEncounterId }) {
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: ACTIONS.RENAME_ENCOUNTER, payload: newName });

    setNewName("");
  }

  return (
    <div className="flex">
      <select
        value={activeEncounterId}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.CHANGE_ENCOUNTER_ID,
            payload: Number(e.target.value),
          })
        }
        className="bg-slate-700 mr-1 ml-16 p-2 border-2 rounded-md text-slate-100"
      >
        {encounters.map((e) => (
          <option value={e.id} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => dispatch({ type: ACTIONS.ADD_ENCOUNTER })}
        className="bg-slate-700 mx-1 p-2 border-2 rounded-md text-slate-100"
      >
        Add
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.CLONE_ENCOUNTER })}
        className="bg-slate-700 mx-1 p-2 border-2 rounded-md text-slate-100"
      >
        Clone
      </button>

      <form onSubmit={handleSubmit}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          placeholder="new Name ..."
          className="bg-slate-700 mx-1 p-2 border-2 rounded-md text-slate-100"
        />
      </form>
    </div>
  );
}

export default EncounterSelect;
