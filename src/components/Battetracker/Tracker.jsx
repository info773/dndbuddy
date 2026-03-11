import { useState } from "react";
import Monster from "./Monster";
import MonsterFilter from "./MonsterFilter";

function Tracker({ monsters, monsterFilter, dispatch, isLoading }) {
  const [openNotesId, setOpenNotesId] = useState(null);

  if (monsterFilter === "desc") {
    monsters.sort((a, b) => b.init - a.init);
  } else if (monsterFilter === "asc") {
    monsters.sort((a, b) => a.init - b.init);
  } else if (monsterFilter === "nameAz") {
    monsters.sort((a, b) => a.name.localeCompare(b.name));
  } else if (monsterFilter === "nameZa") {
    monsters.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="p-6">
      <MonsterFilter dispatch={dispatch} />
      {isLoading ? (
        <div className="bg-slate-200 mx-10 my-4 mb-4 px-3 py-2 rounded rounded-md w-100 text-sm">
          Loading from server...
        </div>
      ) : null}
      <div>
        {monsters.map((monster) => (
          <Monster
            name={monster.name}
            init={monster.init}
            hp={monster.hp}
            key={monster.id}
            id={monster.id}
            notes={monster.notes}
            status={monster.status}
            dispatch={dispatch}
            openNotesId={openNotesId}
            setOpenNotesId={setOpenNotesId}
          />
        ))}
      </div>
    </div>
  );
}

export default Tracker;
