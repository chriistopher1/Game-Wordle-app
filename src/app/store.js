import { configureStore } from '@reduxjs/toolkit';

import lifePointReducer from "../redux/reducer/life-point-reducer";
import timerReducer from '../redux/reducer/timer-reducer';
import pointReducer from '../redux/reducer/point-reducer';
import gameCoverReducer from '../redux/reducer/game-cover-reducer';


export default configureStore({

  reducer: {
    life: lifePointReducer,
    timer: timerReducer,
    point: pointReducer,
    game: gameCoverReducer
  }
})