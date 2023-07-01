import React from "react";
import Scorecard from "./Scorecard";

function Score() {
  return (
    <div className="score-main">
      <div className="score-top">
      <div className="today-scores">
        <p>Today</p>
        <div className="score-subject">
          <p>Score in sub1</p>
          <input type="text" name="" id="" />
        </div>
        <div className="score-subject">
          <p>score in sub2 </p>
          <input type="text" name="" id="" />
        </div>
        <div className="score-subject">
          <p>score in sub3</p>
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className="target-score">
        <p>Target: 898</p>
      </div>

      </div>

      <div className="score-bottom">
        <h2>here's the stuff you've achieved ranger</h2>
    <div className="scores">
    <Scorecard></Scorecard>
    <Scorecard></Scorecard>
    <Scorecard></Scorecard>
    <Scorecard></Scorecard>
    </div>


      </div>



      </div>
  );
}

export default Score;

