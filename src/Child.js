
import ValueContext from './ValueContext';
import React, {useContext}from 'react';

function Child(props) {
    let value = useContext(ValueContext);
  return (
    <div >
      Child number  {value[0]}
      <button name="Update Number" onClick={()=>value[1](++value[0])} >Update Number</button>
    </div>
  );
}

export default Child;
