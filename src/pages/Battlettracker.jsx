import Form from "../components/Form";
import NavBar from "../components/NavBar";
import Tracker from "../components/Tracker";
import ACTIONS from "../store/actions";
import Footer from "../components/Footer";

function Battlettracker({ monsters, monsterFilter, dispatch }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <h1 className="p-4 font-bold text-2xl text-center">Battle Tracker</h1>
      <Form dispatch={dispatch} />
      <Tracker
        monsters={monsters}
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
