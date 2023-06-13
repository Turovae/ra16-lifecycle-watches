import Watch from "./Watch";
import WatchProps from "../../interfaces/watch";

function Watches({watches, onDelete}: {
  watches: WatchProps[],
  onDelete: Function,
}) {
  return (
    <div className="watches">
      <h3>Watches component</h3>
      {watches.map((watch) => <Watch key={watch.id} {...watch} onDelete={onDelete} />)}
    </div>
  );
}

export default Watches;
