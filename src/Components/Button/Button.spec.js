import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button/Button';
import "@testing-library/jest-dom/extend-expect"


test(('should be a button'), () =>{
    const {getByRole, debug} = render(<Button />)
    debug();
    expect(getByRole('button')).toBeInTheDocument
})
test(('should be a mas button'),()=>{
    const {getByTestId,debug} =render(<Button mas />)
    debug();
    expect(getByTestId('btnMas')).toBeInTheDocument
})
test(('should be a enter button'),()=>{
    const {getByTestId,debug} =render(<Button enter />)
    debug();
    expect(getByTestId('btnEnter')).toBeInTheDocument
})
test(('should be a pink button'),()=>{
    const {getByTestId,debug} =render(<Button pink />)
    debug();
    expect(getByTestId('btnRosa')).toBeInTheDocument
})
test(('should be a green button'),()=>{
    const {getByTestId,debug} =render(<Button green />)
    debug();
    expect(getByTestId('btnVerde')).toBeInTheDocument
})

