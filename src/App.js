//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.
  const [homeScore, homeScoreCount] = React.useState(32);
  const [awayScore, awayScoreCount] = React.useState(32);
  const [homeName, homeNameChange] = React.useState('Lions');
  const [awayName, awayNameChange] = React.useState('Tigers');
  const [clockSeconds, clockSecondsChange] = React.useState(55);
  let newHomeName = '';
  let newAwayName = '';  
  let newHomeScore;
  let newAwayScore;
  let seconds;

  let countDown = useEffect(() => {    
    if (clockSeconds !== 0) {      
      const timer = setInterval(() => clockSecondsChange(clockSeconds - 1), 1000);
      return () => clearInterval(timer)
    } else {
      return clockSecondsChange('Game Over');}
    },[clockSeconds])

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
          awayScoreCount(newAwayScore)
          //countDown();
        }}>
          Away Team Score
        </button>
      </div>

      <div className='buttons'>
        <button className='homeButtons_touchdown' onClick={() => {
          seconds = prompt('How many seconds are left in the quarter?')
          if (isNaN(seconds)) {
            seconds = prompt('That is not a number. Enter a number.')
          } else if (seconds > 59) {
            seconds = prompt('Please enter a number less than 60.')
          } else {
          clockSecondsChange(seconds);}          
        }}>
          Seconds
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
          <div className="timer">00:{clockSeconds}</div>
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
