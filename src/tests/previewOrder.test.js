import { render } from '@testing-library/react';
import React from 'react'
import PreviewOrder from '../components/PreviewOrder/PreviewOrder'

describe("Tests for PreviewOrder", () =>{
    test("Looking text",()=>{
        let {getByText} = render (<PreviewOrder/>);
        expect(getByText("No hay elementos en la orden aún.")).toBeInTheDocument()
    })
})