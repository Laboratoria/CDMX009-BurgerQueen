import React from 'react';
import logoImage from '../../assets/images/logoBurgerixtli.png'

export default function Logo({className}) {
    return (
         <div className={className}>
          <img src={logoImage} className={className} alt="logo" />
        </div>
    );
  }

