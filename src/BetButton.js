import React from 'react'

export default function BetButton({children, onClick, compare}) {
  return (
    <button onClick={() => onClick(compare)}>{children}</button>
  );
}
