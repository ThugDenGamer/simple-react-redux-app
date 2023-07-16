import React from 'react';
import Counter from './Components/Counter';
import DecreaseByThreeCounter from './Components/DecreaseByThreeCounter';
import DecreaseCounter from './Components/DecreaseCounter';
import IncreaseByTwoCounter from './Components/IncreaseByTwoCounter';
import IncreaseCounter from './Components/IncreaseCounter';
import ResetCounter from './Components/ResetCounter';

export default function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <IncreaseByTwoCounter/>
      <DecreaseCounter/>
      <DecreaseByThreeCounter/>
      <ResetCounter/>
    </div>
  )
}