function StatusOverview({ status = [], isSelected }) {
  const max = 4;
  const shown = status.slice(0, max);
  const text = shown.join(", ");

  return (
    <div>
      {status.length ? (
        <div
          className={
            isSelected ? "opacity-70 text-white" : "opacity-70 text-slate-900"
          }
        >
          {status.length > max ? `${text}, [...]` : text}
        </div>
      ) : (
        <p
          className={
            isSelected ? "opacity-40 text-white" : "opacity-40 text-slate-500"
          }
        >
          No status effects
        </p>
      )}
    </div>
  );
}

export default StatusOverview;
