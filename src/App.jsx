import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battletracker from "./pages/Battlettracker";
import { useReducer, useEffect, useRef } from "react";
import ACTIONS from "./store/actions";
import initialState from "./store/initialState";
import { supabase } from "./lib/supabaseClient";

const STATE_ROW_ID = "00000000-0000-0000-0000-000000000001";

function reducer(state, action) {
  const activeId = state.activeEncounterId;
  const activeEncounter = state.encounters.find(
    (e) => e.id === state.activeEncounterId,
  );

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

    case ACTIONS.CHANGE_ENCOUNTER_ID:
      return {
        ...state,
        activeEncounterId: action.payload,
      };

    case ACTIONS.ADD_ENCOUNTER: {
      const nextId =
        state.encounters.length === 0
          ? 1
          : Math.max(...state.encounters.map((e) => e.id)) + 1;

      const newEncounter = {
        id: nextId,
        name: `Encounter ${nextId}`,
        monsters: [],
      };

      return {
        ...state,
        encounters: [...state.encounters, newEncounter],
        activeEncounterId: nextId,
      };
    }

    case ACTIONS.CLONE_ENCOUNTER: {
      const nextId =
        state.encounters.length === 0
          ? 1
          : Math.max(...state.encounters.map((e) => e.id)) + 1;

      const newEncounter = {
        id: nextId,
        name: `${activeEncounter.name} CLONE  `,
        monsters: activeEncounter.monsters,
      };

      return {
        ...state,
        encounters: [...state.encounters, newEncounter],
        activeEncounterId: nextId,
      };
    }

    case ACTIONS.RENAME_ENCOUNTER:
      return {
        ...state,
        encounters: state.encounters.map((e) =>
          e.id === activeId
            ? {
                ...e,
                name: action.payload,
              }
            : e,
        ),
      };

    case ACTIONS.HYDRATE_STATE:
      return action.payload ?? state;

    default:
      throw new Error("action unkown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isHydrating = useRef(true);

  // LOAD ONCE
  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("app_state")
          .select("state")
          .eq("id_uuid", STATE_ROW_ID)
          .maybeSingle();

        if (error) {
          console.error("Supabase load failed:", error.message);
          isHydrating.current = false;
          return;
        }

        if (data?.state) {
          dispatch({ type: ACTIONS.HYDRATE_STATE, payload: data.state });
        }
      } catch (err) {
        console.error("Supabase load threw:", err);
      } finally {
        isHydrating.current = false;
      }
    })();
  }, []);

  // SAVE on changes
  useEffect(() => {
    if (isHydrating.current) return;

    const t = setTimeout(async () => {
      try {
        const { error } = await supabase.from("app_state").upsert({
          id_uuid: STATE_ROW_ID,
          state,
          updated_at: new Date().toISOString(),
        });

        if (error) {
          console.error("Supabase save failed:", error.message);
        }
      } catch (err) {
        console.error("Supabase save threw:", err);
      }
    }, 300);

    return () => clearTimeout(t);
  }, [state]);

  return (
    <div className="bg-slate-400 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/battletracker"
            element={
              <Battletracker
                monsterFilter={state.monsterFilter}
                dispatch={dispatch}
                encounters={state.encounters}
                activeEncounterId={state.activeEncounterId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
