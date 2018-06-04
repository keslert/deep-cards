import React from 'react';
import Icon from './icons/Submarine';

export default ({
  card: {
    number = 1,
    text,
  }
}) => {

  return (
    <div className="bg-white dark-gray br3 pa2 shadow card overflow-hidden">
      <div className="pa3 br2 h-100 flex flex-column"> 
        <div className="flex-auto">
          <p className="fw7 sub-bar">{text}</p>
        </div>
        <div className="relative">
          {false && <div className="tc nb2"><Icon size={80} fill="#00beef33" /></div>}

          <div className="icon absolute">
            <Icon size={350} fill="rgba(0,0,0,0.03)" />
          </div>
          <p className="light-silver tc f7">Deep Cards</p>
          <div className="absolute right-0 bottom-0 f7 light-silver">
            #{number}
          </div>
        </div>
      </div>
    </div>
  )
}