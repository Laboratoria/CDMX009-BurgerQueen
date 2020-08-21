import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NavHeader from '../NavHeader/NavHeader';
import "@testing-library/jest-dom/extend-expect"


describe(('NavHeader'), ()=>{
    test(('should render without crashing'), () =>{
        const div = document.createElement('div')
        ReactDOM.render(<NavHeader/>, div)
    })
   
})

