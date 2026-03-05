import { useReducer } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("action unkown");
  }
}

function Battlettracker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-slate-200 min-h-screen">
      <NavBar />
      <h1 className="p-4 font-bold text-2xl text-center">Battle Tracker</h1>
      <Form />
    </div>
  );
}

export default Battlettracker;
