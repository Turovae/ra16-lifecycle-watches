import Watch from "./Watch";
import WatchProps from "../../interfaces/watch";
import './Watches.css';

function Watches({watches, onDelete}: {
  watches: WatchProps[],
  onDelete: CallableFunction,
}) {
  return (
    <div className="watches">
      {watches.map((watch) => <Watch key={watch.id} {...watch} onDelete={onDelete} />)}
    </div>
  );
}

export default Watches;
