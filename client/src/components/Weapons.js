import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Weapon({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sword",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleClick = () => {
    console.log('iran2')
  }

  return(
    <>
      <div className='imageHolder'>
        <img
          ref={drag}
          src={url}
          width="150px"
          style={{ border: isDragging ? "2px solid blue" : "0px" }}
        />
      </div>
    </>
  );
}

export default Weapon