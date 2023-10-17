import { connect } from "react-redux";
import React from "react";

class GameOver extends React.Component {
  render() {
    return (
      <div className="">
        <div className="text-2xl text-center mt-5">Game Wordle</div>
        <div className="mt-44 flex justify-center items-center">
          <div className="flex flex-col gap-5 text-center p-5">
            <div className="text-2xl">Game Over !</div>
            <div>Total Points: {this.props.point.pointCount}</div>
            <div className="text-center">
              <a
                href="/"
                className="bg-teal-500 p-3 w-auto transition hover:text-black rounded-lg w-64 mx-auto"
              >
                Back to main menu
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  point: state.point,
});

export default connect(mapStateToProps)(GameOver);
