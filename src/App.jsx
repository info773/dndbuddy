import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battletracker from "./pages/Battlettracker";
import { useReducer } from "react";
import ACTIONS from "./store/actions";
import initialState from "./store/initialState";

function reducer(state, action) {
  const activeId = state.activeEncounterId;

  switch (action.type) {
    case ACTIONS.ADD_MONSTER:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: [...e.monsters, action.payload],
              }
            : e,
        ),
      };

    case ACTIONS.DELETE_MONSTER:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.filter(
                  (monster) => monster.id !== action.payload,
                ),
              }
            : e,
        ),
      };

    case ACTIONS.CHANGE_MONSTER:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.map((monster) =>
                  monster.id === action.payload.id
                    ? {
                        ...monster,
                        [action.payload.prop]: action.payload.value,
                      }
                    : monster,
                ),
              }
            : e,
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
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.map((monster) =>
                  monster.id === action.payload.id
                    ? {
                        ...monster,
                        hp: Number(monster.hp) + Number(action.payload.hp),
                      }
                    : monster,
                ),
              }
            : e,
        ),
      };

    case ACTIONS.SUBSTRACT_MONSTER_HP:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.map((monster) =>
                  monster.id === action.payload.id
                    ? {
                        ...monster,
                        hp: Number(monster.hp) - Number(action.payload.hp),
                      }
                    : monster,
                ),
              }
            : e,
        ),
      };

    case ACTIONS.CHANGE_NOTES:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.map((monster) =>
                  monster.id === action.payload.id
                    ? { ...monster, notes: action.payload.notes }
                    : monster,
                ),
              }
            : e,
        ),
      };

    case ACTIONS.CLICK_STATUS_BOX:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                monsters: e.monsters.map((monster) =>
                  monster.id === action.payload.id
                    ? {
                        ...monster,
                        status: monster.status.includes(
                          action.payload.statusEffect,
                        )
                          ? monster.status.filter(
                              (s) => s !== action.payload.statusEffect,
                            )
                          : [...monster.status, action.payload.statusEffect],
                      }
                    : monster,
                ),
              }
            : e,
        ),
      };

    default:
      throw new Error("action unkown");
  }
}

export default function App() {
  const [{ encounters, activeEncounterId, monsterFilter }, dispatch] =
    useReducer(reducer, initialState);

  const activeEncounter = encounters.find((e) => e.id === activeEncounterId);
  const activeMonsters = activeEncounter?.monsters ?? [];

  return (
    <div className="bg-slate-400 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/battletracker"
            element={
              <Battletracker
                monsters={activeMonsters}
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
