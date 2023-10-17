import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../redux/reducer/life-point-reducer";

import Timer from "../components/timer";
import PointCount from "../components/point-count";
import LifePoint from "../components/life-point";

import Game from "../components/main-game";

function Play() {
  return (
    <>
      <div className=" min-w-screen p-3 flex justify-between">
        <div className="left-bar w-32 flex flex-col gap-1  ">
          <LifePoint />
          <Timer></Timer>
        </div>

        <div className="right-bar w-36 text-right">
          <PointCount />
        </div>
      </div>
      <Game />
    </>
  );
}

export default Play;
