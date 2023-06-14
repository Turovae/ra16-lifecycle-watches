import React from "react";
import WatchProps from "../../interfaces/watch";
import moment from "moment";
import './Watch.css';
import WatchHand from "./WatchHand";

interface WatchP extends WatchProps {
  onDelete: CallableFunction,
}

type State = {
  time: Date,
}

// function Watch({ id, name, timezone, onDelete }: WatchP) {
//   console.log(name);
//   const [time, setTime] = useState(new Date());

//   const deleteWatch = (evt: React.MouseEvent) => {
//     evt.preventDefault();
//     onDelete(id);
//     console.log(id);
//   }

//   const timeOfZone = moment(time).utcOffset(timezone);
//   const hours = timeOfZone.hours();
//   const minuts = timeOfZone.minutes();
//   const seconds = timeOfZone.seconds();

//   // setTimeout(() => {
//   //   console.log('time click')
//   //   setTime(new Date());
//   // }, 1000);

//   return (
//     <div className="watch">
//       <h4 className="watch-name">{name}</h4>
//       <div className="watch-dgt">
//         {moment(time).utcOffset(timezone).format('HH:mm:ss')}
//       </div>
//       <div className="watch-face">
//         {hours}-{minuts}-{seconds}
//       </div>
//       <div className="timezone">
//         { timezone }
//       </div>
//       <button className="watch-btn" type="button" onClick={deleteWatch}>X</button>
//     </div>
//   )
// }

class Watch extends React.Component<WatchP> {
  state: State;
  timerID: number | undefined;

  constructor(props: WatchP) {
    super(props);
    this.state = {
      time: new Date(),
    }

    this.timerID = undefined;
  }

  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(),
      200
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  tick(): void {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const { id, name, timezone, onDelete } = this.props;
    // console.log(name);
    const timeOfZone = moment(this.state.time).utcOffset(timezone);
    const hours = timeOfZone.hours();
    const minuts = timeOfZone.minutes();
    const seconds = timeOfZone.seconds();

    const deleteWatch = (evt: React.MouseEvent) => {
      evt.preventDefault();
      onDelete(id);
    }

    return (
      <div className="watch">
        <h4 className="watch-name">{name}</h4>
        <div className="watch-face">
          <WatchHand timepart={seconds} type="seconds" />
          <WatchHand timepart={minuts} type="minuts" />
          <WatchHand timepart={hours} type="hours" />
        </div>
        <button
          className="watch-btn"
          type="button"
          onClick={deleteWatch}>X</button>
      </div>
    )
  }
}

export default Watch;
