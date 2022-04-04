import React, { useState } from 'react';
import { anecdotes } from './anacdotes';
import Anecdotes from "./components/Anecdotes";
import Button from "./components/Button";

function App() {
  const points = [1, 3, 4, 6];
  let copy = [...points];
  const [selected, setSelected] = useState(0);
  const [anacdoteScore, setAnacdoteScore] = useState(Array(copy).fill(0));

  const handleNextAnecdote = () => {
      const nextAnecdote = Math.floor(Math.random() * anecdotes.length);
      setSelected(nextAnecdote);
  }

  const handleVoteAnecdote = () => {
      let votes = [...anacdoteScore]
      votes[selected] += 1;
      setAnacdoteScore(votes);
  }

  return (
      <div>
          <h1>Anecdotes</h1>
          <Anecdotes anacdote={anecdotes[selected]} />
          <Button title="Next Anecdote" handleClick={handleNextAnecdote} />
          <Button title="Vote" submit={handleVoteAnecdote} />
          <p>{anacdoteScore}</p>
      </div>
  );
}

export default App;
