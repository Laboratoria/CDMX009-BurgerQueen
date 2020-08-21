import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../Logo/Logo';
import "@testing-library/jest-dom/extend-expect"

describe(('test Logo big'), ()=>{
    test(('should be an image'), () =>{
        const {getByRole, debug} = render(<Logo big/>)
        debug();
        expect(getByRole('img')).toBeInTheDocument
    })
    test(('should have an alt'), () =>{
        const {getByAltText, debug} = render(<Logo big/>)
        debug();
        expect(getByAltText('logoPrim.png')).toBeInTheDocument
    })
})

describe(('test Logo small'), ()=>{
    test(('should be an image'), () =>{
        const {getByRole, debug} = render(<Logo small/>)
        debug();
        expect(getByRole('img')).toBeInTheDocument
    })
    test(('should have an alt'), () =>{
        const {getByAltText, debug} = render(<Logo small/>)
        debug();
        expect(getByAltText('logoSmall.png')).toBeInTheDocument
    })
})
