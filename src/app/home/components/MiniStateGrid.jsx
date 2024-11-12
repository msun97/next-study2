import React from 'react'
import MiniState from './MiniState'
import { stateData } from '@/data/statedata';


const MiniStateGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
      {stateData.map((item,i) =>(
        <MiniState 
          key={i}
          name={item.name}
          value={item.value}
          bgColor={item.bgColor}
          startContent={item.startContent}
          endContent={item.endContent}
          percent={item.percent}
          since={item.since}
        />
        ))}
    </div>
  );
};

export default MiniStateGrid