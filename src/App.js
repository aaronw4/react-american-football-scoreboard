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
  let newHomeName = '';
  let newAwayName = '';  
  let newHomeScore;
  let newAwayScore;

  return (
    <div className="container">
      <div className="buttons">        
        <button className="homeButtons__touchdown" onClick={() => {
          newHomeName = prompt('What is the name of the home team?')
          homeNameChange(newHomeName);
        }}>
          Home Team Name
        </button>
        
        <button className="homeButtons__touchdown" onClick={() => {
          newAwayName = prompt('What is the name of the away team?')
          awayNameChange(newAwayName);
        }}>
          Home Team Name
        </button>
      </div>

      <div className="buttons">        
        <button className="homeButtons__touchdown" onClick={() => {
          newHomeScore = prompt('How many points does the home team have?');
          if (isNaN(newHomeScore)) {
            newHomeScore =  prompt('That is not a number. Enter a number.')
          }
          homeScoreCount(newHomeScore);
        }}>
          Home Team Score
        </button>
        
        <button className="homeButtons__touchdown" onClick={() => {
          newAwayScore = prompt('How many points does the away team have?');
          if (isNaN(newAwayScore)) {
            newAwayScore = prompt('That is not a number. Enter a number.')
          }
          awayScoreCount(newAwayScore);
        }}>
          Away Team Score
        </button>
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
