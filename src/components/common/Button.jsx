import React from 'react';


export default function Button({className,value,onClick}) {
      
    return (
      <input
          className={className} 
          type="button"
          id="" 
          value={value} 
          onClick={onClick}
      />
    );
  }
  