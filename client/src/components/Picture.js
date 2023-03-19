import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return(
    <>
      <div className='imageHolder'>
        <img
          ref={drag}
          src={url}
          width="150px"
          // style={{border: isDragging ? "5px solid red" : "0px"}}
        />
      </div>
    </>
  );
}

export default Picture