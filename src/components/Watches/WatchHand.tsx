interface WatchHandProps {
  timepart: number,
  type: string,
}

function WatchHand({ timepart, type }: WatchHandProps) {
  let degree;
  const lineClass = `watch-hand-line watch-hand-line-${type}`;
  switch(type) {
    case 'seconds':
      degree = timepart * 6;
      break;
    case 'minuts':
      degree = timepart * 6;
      break;
    default:
      degree = timepart * 30;
  }
  return (
    <div className="watch-hand"
      style={{
        transform: `rotate(${degree}deg)`
      }}
    >
      <div className={lineClass}>
        { type !== 'seconds' ?  <div className="watch-hand-arrow" /> : null}
      </div>
    </div>
  );
}

export default WatchHand;
