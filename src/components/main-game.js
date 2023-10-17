import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomGame,
  onWrongAnswer,
  onCorrectAnswer,
} from "../redux/reducer/game-cover-reducer"; // Replace with the correct path to your slice
import { decrement } from "../redux/reducer/life-point-reducer";
import { incrementByAmount } from "../redux/reducer/point-reducer";
import { resetTimer } from "../redux/reducer/timer-reducer";


function Game() {
  const [warning, setWarning] = useState();
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const gameName = useSelector((state) => state.game.gameName);
  const gameCover = useSelector((state) => state.game.gameCover);
  const gameCoverBlur = useSelector((state) => state.game.gameCoverBlur);

  const timeLeft = useSelector((state) => state.timer.timeLeft);

  useEffect(() => {
    dispatch(fetchRandomGame());
  }, [dispatch]);

  function handleOnWrongAnswer() {
    console.log(gameCoverBlur);
    dispatch(onWrongAnswer());
  }

  function handleUserInput(event) {
    if (event.key === "Enter") {
      console.log("Enter pressed");

      const userAnswer = event.target.value;
      console.log(userAnswer);
      if (gameName.toLowerCase() == userAnswer.toLowerCase()) {
        setWarning("Correct answer");
        setStatus(true);
        dispatch(incrementByAmount({ timeLeft: timeLeft }));
        dispatch(onCorrectAnswer());
        dispatch(fetchRandomGame());
        dispatch(resetTimer());
      } else {
        setStatus(false);
        setWarning("Wrong answer");
        handleOnWrongAnswer();
        dispatch(decrement());
      }
    }
  }

  return (
    <>
      {gameName ? (
        <div className="middle-bar grow text-center flex justify-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-4">Guess the game!</div>
            {/* <h2>{gameName}</h2> */}
            {gameCover ? (
              gameCoverBlur ? (
                console.log(gameCoverBlur),
                <img
                  src={gameCover.replace("t_thumb", "t_original")}
                  alt={gameName}
                  className={`h-72 w-auto blur-${gameCoverBlur}`}
                />
              ) : (
                console.log("masuk no gameCoverBlur"),
                <img
                  src={gameCover.replace("t_thumb", "t_original")}
                  alt={gameName}
                  className={`h-72 w-auto blur`}
                />
              )
            ) : (
              <p>Loading image...</p>
            )}
            <br />
            <div className={status ? "text-green-400" : "text-red-400"}>
              {warning}
            </div>

            <input
              type="text"
              className="text-black outline-none border-4 focus:border-teal-400 w-72 h-10 pl-2 rounded-lg mt-8"
              onKeyDown={handleUserInput}
            />
          </div>
        </div>
      ) : (
        <p>Loading game data...</p>
      )}
    </>
  );
}

export default Game;
