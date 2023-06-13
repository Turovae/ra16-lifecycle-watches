import React from "react";
import WatchProps from "../../interfaces/watch";

interface WatchP extends WatchProps {
  onDelete: Function,
}

function Watch({ id, name, timezone, onDelete }: WatchP) {
  console.log(name);

  const deleteWatch = (evt: React.MouseEvent) => {
    evt.preventDefault();
    onDelete(id);
    console.log(id);
  }

  return (
    <div className="watch">
      <h4>{name}</h4>
      <div className="timezone">
        { timezone }
      </div>
      <button className="watch-btn" type="button" onClick={deleteWatch}>X</button>
    </div>
  )
}

export default Watch;
