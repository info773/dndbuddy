import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battletracker from "./pages/Battlettracker";
import { useReducer } from "react";
import ACTIONS from "./store/actions";
import initialState from "./store/initialState";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_MONSTER:
      return { ...state, monsters: [...state.monsters, action.payload] };

    case ACTIONS.DELETE_MONSTER:
      return {
        ...state,
        monsters: state.monsters.filter(
          (monster) => monster.id !== action.payload,
        ),
      };

    case ACTIONS.CHANGE_MONSTER:
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id
            ? { ...monster, [action.payload.prop]: action.payload.value }
            : monster,
        ),
      };

    case ACTIONS.CHANGE_MONSTER_FILTER:
      return {
        ...state,
        monsterFilter: action.payload,
      };

    case ACTIONS.ADD_MONSTER_HP:
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id
            ? { ...monster, hp: Number(monster.hp) + Number(action.payload.hp) }
            : monster,
        ),
      };

    case ACTIONS.SUBSTRACT_MONSTER_HP:
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id
            ? { ...monster, hp: Number(monster.hp) - Number(action.payload.hp) }
            : monster,
        ),
      };

    case ACTIONS.CHANGE_NOTES:
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id
            ? { ...monster, notes: action.payload.notes }
            : monster,
        ),
      };

    default:
      throw new Error("action unkown");
  }
}

export default function App() {
  const [{ monsters, monsterFilter }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <div className="bg-slate-400 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/battletracker"
            element={
              <Battletracker
                monsters={monsters}
                monsterFilter={monsterFilter}
                dispatch={dispatch}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
