import React, { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Question({ qlist }) {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState('');
  const prompt = 'Who is this?';
  // pick a question
  const question = qlist[Math.floor(Math.random() * 10) % 12];
  function handleSubmit1(e) {
    if (question.option1 === question.correct) {
      setResponse('Correct');
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit2(e) {
    if (question.option2 === question.correct) {
      setResponse('Correct');
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit3(e) {
    if (question.option3 === question.correct) {
      setResponse('Correct');
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  function handleSubmit4(e) {
    if (question.option4 === question.correct) {
      setResponse('Correct');
    } else {
      setResponse('Incorrect');
    }
    e.preventDefault();
    setCounter(counter + 1);
  }

  return (
    <div className="App-header">
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

Question.propTypes = {
  qlist: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Question;
