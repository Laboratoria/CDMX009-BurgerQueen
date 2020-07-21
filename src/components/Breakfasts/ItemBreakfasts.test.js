import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemBreakfast from './ItemBreakfast';
import Summary from '../Sumary/Summary';

it('should be render an image', () => {
    const { queryByRole, debug } = render(<ItemBreakfast />)
    debug()
    const image = queryByRole("img")
    expect(image).toBeInTheDocument()

})

it('should render dish properties', () => {
    let props = {
        idItem: 3,
        dish: 'Café con leche',
        price: 7,
    }

    const { getByText, debug } = render(<ItemBreakfast {...props} />)
    debug()
    const nameDish = getByText("Café con leche")
    expect(nameDish).toBeInTheDocument()

})
/* it('should render Comida Menu', () => {
    let props = {
        idItem: 3,
        dish: 'Café con leche',
        price: 7,
        breakfasts: [
            { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
            { id: 2, dish: "Café americano", price: 5, quantity: 1 }],
        order: {
            items: [
                { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
                { id: 2, dish: "Café americano", price: 5, quantity: 1 }]
        },
        setOrder: jest.fn()
    }
    let propsSum = {
        order: {
            items: [
                { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
                { id: 2, dish: "Café americano", price: 5, quantity: 1 }]
        },
        setOrder: jest.fn(),
        breakfasts: [
            { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
            { id: 2, dish: "Café americano", price: 5, quantity: 1 }],
        lunchs: [{ id: 7, dish: "Papas fritas", price: 5, quantity: 1 },
        { id: 8, dish: "Aros de cebolla", price: 5, quantity: 1 }]
    }
    const { queryByRole, getByText, debug } = render(<ItemBreakfast {...props} />, <Summary {...propsSum} />)
    //debug()
    const image = queryByRole("img")
    fireEvent.click(image);
    debug()
    /* render(<Summary {...propsSum} />)
       //debug()
       const price = getByText("$7")
       expect(price).toBeInTheDocument() */
    // expect(render(<Summary {...propsSum} />)).toBeInTheDocument()
//})


