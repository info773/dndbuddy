import { useState } from "react";
import Monster from "./Monster";
import MonsterFilter from "./MonsterFilter";

function Tracker({ monsters, monsterFilter, dispatch }) {
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
