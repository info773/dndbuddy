import ACTIONS from "../../store/actions";

function Checkbox({ statusEffect, status = [], dispatch, id }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={status.includes(statusEffect)}
        onChange={() =>
          dispatch({
            type: ACTIONS.CLICK_STATUS_BOX,
            payload: { statusEffect, id },
          })
        }
      />{" "}
      {statusEffect}
    </div>
  );
}

export default Checkbox;
