import React from 'react';
import ReactDOM from 'react-dom';
import ClosingOrder from './ClosingOrder'
import "@testing-library/jest-dom/extend-expect"


describe(('ClosingOrder'), ()=>{
    test(('should render without crashing'), () =>{
        const div = document.createElement('div')
        ReactDOM.render(<ClosingOrder />, div)
    })
   
})