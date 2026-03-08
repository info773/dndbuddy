import ACTIONS from "../../store/actions";

function MonsterNotes({ notes, dispatch, id }) {
  return (
    <div>
      <textarea
        className="bg-slate-100 my-1 p-3 border border-slate-300 focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-200 w-md min-w-100 min-h-50 text-slate-900 text-sm leading-relaxed resize placeholder-slate-400"
        placeholder="Write your notes..."
        rows={8}
        value={notes}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.CHANGE_NOTES,
            payload: { id: id, notes: e.target.value },
          })
        }
      />
    </div>
  );
}

export default MonsterNotes;
