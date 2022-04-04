import React, { useState } from 'react';

const Statistics = (props) => {
    console.log(props);
    const hundred = 100
    const total = props.good + props.bad + props.neutral;
    const positive = props.good / total * hundred;
    const average = total / 3;
    console.log(average);
    return (
        <div>
            <Statistic total={total} positive={positive} average={average} />
        </div>
    );
}
const Statistic = ({ total, positive, average }) => {
    return (
        <div>
            <p>{total}</p>
            <p>{positive}</p>
            <p>{average}</p>
        </div>
    );
}

function App() {
  const [score, setScore] = useState({
    good: 0, bad: 0, neutral: 0
  })
  const handleGood = (evt) => {
    evt.preventDefault();
    const goodClick = { ...score, good: score.good + 1 };
    setScore(goodClick)
  }

  const handleBad = (evt) => {
    evt.preventDefault();
    const badClick = {...score, bad: score.bad + 1};
    setScore(badClick);
  }

  const handleNeutral = (evt) => {
    evt.preventDefault();
    const neutralClick = {...score, neutral: score.neutral + 1};
    setScore(neutralClick);
  }
  return (
    <div>
      <p>{score.good}</p>
      <p>{score.bad}</p>
      <p>{score.neutral}</p>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleNeutral}>Neutral</button>
      <Statistics
          good={score.good}
          bad={score.bad}
          neutral={score.neutral}
      />
    </div>
  );
}

export default App;
