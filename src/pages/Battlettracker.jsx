import Form from "../components/Battetracker/Form";
import NavBar from "../components/shared/NavBar";
import Tracker from "../components/Battetracker/Tracker";
import ACTIONS from "../store/actions";
import Footer from "../components/shared/Footer";

function Battlettracker({
  monsterFilter,
  dispatch,
  encounters,
  activeEncounterId,
}) {
  const activeEncounter = encounters.find((e) => e.id === activeEncounterId);
  const activeMonsters = activeEncounter?.monsters ?? [];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <h1 className="p-4 font-bold text-2xl text-center">Battle Tracker</h1>
      <Form
        dispatch={dispatch}
        encounters={encounters}
        activeEncounterId={activeEncounterId}
      />
      <Tracker
        monsters={activeMonsters}
        monsterFilter={monsterFilter}
        dispatch={dispatch}
      />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Battlettracker;
