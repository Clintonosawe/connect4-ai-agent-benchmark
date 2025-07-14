import React, { useState } from 'react';
import { Connect4 } from './game/connect4';
import type { Player } from './game/connect4';
import { Board } from './components/Board';
import './App.css';

const gameInstance = new Connect4();

function App() {
  const [game, setGame] = useState(() => gameInstance.clone());

  const handleColumnClick = (col: number) => {
    if (game.winner) return;
    const newGame = game.clone();
    if (newGame.makeMove(col)) {
      setGame(newGame);
    }
  };

  const handleReset = () => {
    const newGame = game.clone();
    newGame.reset();
    setGame(newGame);
  };

  let status = '';
  if (game.winner === 'draw') {
    status = "It's a draw!";
  } else if (game.winner) {
    status = `Player ${game.winner} wins!`;
  } else {
    status = `Player ${game.currentPlayer}'s turn`;
  }

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Connect 4</h1>
      <Board board={game.board} onColumnClick={handleColumnClick} winner={game.winner} />
      <div style={{ margin: '16px 0', fontSize: 20 }}>{status}</div>
      <button onClick={handleReset} style={{ padding: '8px 16px', fontSize: 16 }}>Reset</button>
    </div>
  );
}

export default App;
