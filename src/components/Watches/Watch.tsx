import React from "react";
import WatchProps from "../../interfaces/watch";
import moment from "moment";
import './Watch.css';

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

class Watch extends React.Component {
  state: State;
  timerID: number | undefined;

  constructor(props: Readonly<WatchP>) {
    super(props);
    this.state = {
      time: new Date(),
    }

    this.timerID = undefined;
  }

  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
        <div className="watch-dgt">
          {moment(this.state.time).utcOffset(timezone).format('HH:mm:ss')}
        </div>
        <div className="watch-face">
          {/* <div>{hours}-{minuts}-{seconds}</div> */}
          <div className="watch-arrow watch-arrow-hours"
            style={{
              transform: `rotate(${seconds * 6}deg)`
            }}
            ></div>
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
