import React from "react";
import { connect, useDispatch } from "react-redux";
import { incrementByAmount } from "../redux/reducer/point-reducer";

class PointCount extends React.Component {
  handleAddPointCount = () => {
    this.props.incrementByAmount({ timeLeft: this.props.timer.timeLeft });
  };

  render() {
    return (
      <div>
        <div>Total Point : {this.props.point.pointCount}</div>
        <button onClick={this.handleAddPointCount}>Add Point</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  point: state.point,
  timer: state.timer,
});

export default connect(mapStateToProps, { incrementByAmount })(PointCount);
