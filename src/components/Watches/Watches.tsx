import Watch from "./Watch";
import WatchProps from "../../interfaces/watch";

function Watches({watches}: {
  watches: WatchProps[],
}) {
  return (
    <div className="watches">
      <h3>Watches component</h3>
      {watches.map((watch) => <Watch key={watch.id} name={watch.name} timezone={watch.timezone} />)}
    </div>
  );
}

export default Watches;
