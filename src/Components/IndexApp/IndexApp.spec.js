import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import IndexApp from './IndexApp'
import "@testing-library/jest-dom/extend-expect"


describe(('IndexApp'), ()=>{
    test(('should render without crashing'), () =>{
        const div = document.createElement('div')
        ReactDOM.render(<IndexApp/>, div)
    })
   
})