import React, { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Question({ qlist }) {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState('');
  const prompt = 'Who is this?';
  const currUser = localStorage.getItem('$CurrUser');
  const currScore = JSON.parse(localStorage.getItem(currUser + '$'));
  const currPersonalBest = localStorage.getItem(currUser);
  // pick a question
  const question = qlist[Math.floor(Math.random() * 10) % 12];
  function handleSubmit1(e) {
    if (question.option1 === question.correct) {
      setResponse('Correct');
      localStorage.setItem(currUser + '$', currScore + 1);
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit2(e) {
    if (question.option2 === question.correct) {
      setResponse('Correct');
      localStorage.setItem(currUser + '$', currScore + 1);
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit3(e) {
    if (question.option3 === question.correct) {
      setResponse('Correct');
      localStorage.setItem(currUser + '$', currScore + 1);
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit4(e) {
    if (question.option4 === question.correct) {
      setResponse('Correct');
      localStorage.setItem(currUser + '$', currScore + 1);
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

if(counter < 10) {
  return (
    <div className="App-header">
      <header className="Top-header">
        Guess the Celebrity
        <div className="Info-header">
          {currUser}
          <span>
            Current Score: {currScore}
          </span>
          <span>
            Personal Best: {currPersonalBest}
          </span>
        </div>
      </header>
      <img src={question.img} alt="hello" width="400" height="400" />
      <form>
        <p>
          {prompt}
        </p>
        <p>
          {response}
        </p>
        <div>
          <button type="submit" className="Option-button" onClick={handleSubmit1}>{question.option1}</button>
        </div>
        <div>
          <button type="submit" className="Option-button" onClick={handleSubmit2}>{question.option2}</button>
        </div>
        <div>
          <button type="submit" className="Option-button" onClick={handleSubmit3}>{question.option3}</button>
        </div>
        <div>
          <button type="submit" className="Option-button" onClick={handleSubmit4}>{question.option4}</button>
        </div>
      </form>
    </div>
  );
  }
  return <div> Helloo! </div>;
}

Question.propTypes = {
  qlist: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Question;
