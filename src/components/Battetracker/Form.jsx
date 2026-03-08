import { useState } from "react";
import ACTIONS from "../../store/actions";

function Form({ dispatch }) {
  const [form, setForm] = useState({ name: "", init: "", hp: "" });

  function addNewMonster(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newMonster = {
      name: form.name,
      init: form.init,
      hp: form.hp,
      id: id,
      notes: "",
      status: [],
    };

    dispatch({ type: ACTIONS.ADD_MONSTER, payload: newMonster });
    setForm({ name: "", init: "", hp: "" });
  }

  return (
    <div>
      <form onSubmit={addNewMonster} className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="name"
          className="bg-slate-300 p-2 border-2 rounded-md"
          value={form.name}
          onChange={(e) =>
            setForm((form) => ({ ...form, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="init"
          className="bg-slate-300 p-2 border-2 rounded-md"
          value={form.init}
          onChange={(e) =>
            setForm((form) => ({ ...form, init: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="hp"
          className="bg-slate-300 p-2 border-2 rounded-md"
          value={form.hp}
          onChange={(e) => setForm((form) => ({ ...form, hp: e.target.value }))}
        />
        <button className="bg-slate-700 hover:bg-slate-600 p-1 border-2 rounded-md text-slate-50 transition-colors duration-150">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
