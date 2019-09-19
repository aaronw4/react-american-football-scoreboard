//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.
  const [homeScore, homeScoreCount] = React.useState(32);
  const [awayScore, awayScoreCount] = React.useState(32);
  const [homeName, homeNameChange] = React.useState('Lions');
  const [awayName, awayNameChange] = React.useState('Tigers');


  return (
    <div className="container">
      <div>
        <form onSubmit={homeNameChange}>
          <label>
            Home team's name?
            <input type='text' name='homeTeam'/>
          </label>         
          <input type='submit' value='Submit' onChange={homeName}></input>          
        </form>

        <form>
          <label>Away team's name?
          <input type='text' name='awayTeam'/>
          </label>
          <input type='submit' value='Submit'></input>
        </form>
      </div>

      <div>
        <form>
          <label>
            Home team's points?
            <input type='text' name='homePoints'/>
          </label>
          <input type='submit' value='Submit'></input>
        </form>

        <form>
          <label>
            Away team's points?
            <input type='text' name='awayPoints'/>
          </label>
          <input type='submit' value='Submit'></input>
        </form>
      </div>

      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic 
            values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {
            homeScoreCount(homeScore + 7);
            }}>Home Touchdown          
          </button>
          <button className="homeButtons__fieldGoal" onClick={() => {
            homeScoreCount(homeScore + 3);
            }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {
            awayScoreCount(awayScore + 7);
            }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {
            awayScoreCount(awayScore + 3);
            }}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
