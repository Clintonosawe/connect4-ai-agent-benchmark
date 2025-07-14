import React from 'react';
import { COLS, ROWS } from '../game/connect4';
import type { Board as BoardType, Player } from '../game/connect4';

interface BoardProps {
  board: BoardType;
  onColumnClick: (col: number) => void;
  winner: Player | 'draw';
}

export const Board: React.FC<BoardProps> = ({ board, onColumnClick, winner }) => {
  return (
    <div style={{ display: 'inline-block', background: '#1877c9', padding: 16, borderRadius: 8 }}>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        {Array.from({ length: COLS }).map((_, col) => (
          <button
            key={col}
            onClick={() => onColumnClick(col)}
            disabled={!!winner}
            style={{ flex: 1, margin: 2, padding: 4, cursor: winner ? 'not-allowed' : 'pointer' }}
            aria-label={`Drop in column ${col + 1}`}
          >
            {col + 1}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 40px)`, gap: 4 }}>
        {board.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={rowIdx + '-' + colIdx}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: cell === 0 ? '#fff' : cell === 1 ? '#f00' : '#ff0',
                border: '2px solid #1877c9',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 18,
              }}
              aria-label={cell === 0 ? 'Empty' : cell === 1 ? 'Red' : 'Yellow'}
            >
              {cell === 0 ? '' : cell === 1 ? '●' : '●'}
            </div>
          ))
        )}
      </div>
    </div>
  );
}; 