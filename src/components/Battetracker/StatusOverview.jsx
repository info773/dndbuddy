function StatusOverview({ status = [] }) {
  const max = 4;
  const shown = status.slice(0, max);
  const text = shown.join(", ");

  return (
    <div>
      {status.length ? (
        <div>{status.length > max ? `${text}, [...]` : text}</div>
      ) : (
        <p className="opacity-40 text-slate-500">No status effects</p>
      )}
    </div>
  );
}

export default StatusOverview;
