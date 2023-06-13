import WatchProps from "../../interfaces/watch";

function Watch({ name, timezone }: Omit<WatchProps, 'id'>) {
  console.log(name);
  return (
    <div className="watch">
      <h4>{name}</h4>
      <div className="timezone">
        { timezone }
      </div>
    </div>
  )
}

export default Watch;
