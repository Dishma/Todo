import React, { useState } from 'react';
import tick from '../assets/tick.png';
import bin from '../assets/trash-can.png';
import oval from '../assets/oval.png';
import trashcangif from '../assets/trash-cangif.gif';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  const [isHoveredBin, setIsHoveredBin] = useState(false);

  return (
    <div className='flex items-center my-3'>
      <div 
        onClick={() => { toggle(id); }} 
        className='flex flex-1 items-center cursor-pointer'
      >
        <img 
          src={isComplete ? tick : oval} 
          alt="" 
          className='w-7 mr-3'
        />
        <p className={`${isComplete ? "text-slate-200" : ""}`}>{text}</p>
      </div>

      <img 
        src={isHoveredBin ? trashcangif : bin} 
        alt="" 
        className={`cursor-pointer transition-all duration-300 ${isHoveredBin ? 'w-10' : 'w-7 h-7'}`}
        onClick={() => { deleteTodo(id); }}
        onMouseEnter={() => setIsHoveredBin(true)}
        onMouseLeave={() => setIsHoveredBin(false)}
      />
    </div>
  );
}

export default TodoItems;
