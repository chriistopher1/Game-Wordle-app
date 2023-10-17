import React from "react";
import { connect } from "react-redux";
import { decrement } from "../redux/reducer/life-point-reducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LifePoint(props) {
  const navigate = useNavigate();

  const lifeCount = props.life.lifeCount;

  useEffect(() => {
    if(lifeCount < 1){
      navigate("/game-over");
    }
  }, [lifeCount])

  function handleDecrementButton() {
    props.decrement();
  }

  return (
    <div className="text-left">
      <p>LP : {lifeCount}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  life: state.life,
});

export default connect(mapStateToProps, { decrement })(LifePoint);
