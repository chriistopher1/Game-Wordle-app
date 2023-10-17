import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  startTimer,
  resetTimer,
  updateTimeLeft,
} from "../redux/reducer/timer-reducer";
import { useNavigate } from "react-router-dom";

function Timer(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (props.timer.isRunning && props.timer.timeLeft > 0) {
        props.updateTimeLeft(props.timer.timeLeft - 1);
      } else if (props.timer.timeLeft < 1) {
        // Timer has reached 0, navigate to "/game-over"
        navigate("/game-over");
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
  }, [props.timer, navigate]);

  function handleResetButton() {
    props.resetTimer();
  }

  return (
    <div className="text-left">
      <p>Time Left: {props.timer.timeLeft}</p>
    </div>
  );
}

const stateToProps = (state) => ({
  timer: state.timer,
});

export default connect(stateToProps, {
  startTimer,
  resetTimer,
  updateTimeLeft,
})(Timer);
