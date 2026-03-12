import { useState } from "react";
import ACTIONS from "../../store/actions";
import EncounterSelect from "./EncounterSelect";

function Form({ dispatch, encounters, activeEncounterId }) {
  const [form, setForm] = useState({ name: "", init: "", hp: "" });
  const [isOpen, setIsOpen] = useState(true);
  const [isPlayer, setIsPlayer] = useState(false);

  function addNewMonster(e) {
    e.preventDefault();

    if (form.init === "" && form.hp === "")
      return alert("Initative and HP can't be empty");
    if (!Number.isInteger(Number(form.hp)))
      return alert("HP must be a valid number");
    if (!Number.isInteger(Number(form.init)))
      return alert("Initiative must be a valid number");
    if (form.hp === "") return alert("HP can't be emtpy");
    if (form.init === "") return alert("Initative can't be emtpy");

    const id = crypto.randomUUID();

    const newMonster = {
      name: form.name,
      init: form.init,
      hp: form.hp,
      id: id,
      notes: "",
      status: [],
      isSelected: false,
      isPlayer,
    };

    dispatch({ type: ACTIONS.ADD_MONSTER, payload: newMonster });
    setForm({ name: "", init: "", hp: "" });
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="items-center bg-slate-700 hover:bg-slate-600 mx-16 mb-2 px-1 border-2 rounded-md text-slate-50 align-middle transition-colors duration-150"
      >
        {isOpen ? "↑" : "↓"}
      </button>
      {isOpen && (
        <>
          <EncounterSelect
            encounters={encounters}
            dispatch={dispatch}
            activeEncounterId={activeEncounterId}
          />
          <form onSubmit={addNewMonster} className="flex gap-2 mx-16 my-5">
            <input
              type="text"
              placeholder="Monster"
              className="bg-slate-300 p-2 border-2 rounded-md"
              value={form.name}
              onChange={(e) =>
                setForm((form) => ({ ...form, name: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Intiative"
              className="bg-slate-300 p-2 border-2 rounded-md"
              value={form.init}
              onChange={(e) =>
                setForm((form) => ({ ...form, init: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="HP"
              className="bg-slate-300 p-2 border-2 rounded-md"
              value={form.hp}
              onChange={(e) =>
                setForm((form) => ({ ...form, hp: e.target.value }))
              }
            />
            <button className="bg-slate-700 hover:bg-slate-600 p-1 border-2 rounded-md text-slate-50 transition-colors duration-150">
              Add
            </button>
            <div className="flex justify-center items-center gap-2">
              <input
                onChange={() => setIsPlayer(!isPlayer)}
                checked={isPlayer}
                type="checkbox"
              />{" "}
              <span>Player</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
