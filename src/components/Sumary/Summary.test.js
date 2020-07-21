import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import Summary from './Summary'
import Extras from './Extras'


let props = {
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

it('should render dish select', () => {
    const { getByText, debug } = render(<Summary {...props} />)
    //debug()
    const dish = getByText("Café con leche")
    expect(dish).toBeInTheDocument()
})
it('should render price dish select', () => {
    const { getByText, debug } = render(<Summary {...props} />)
    //debug()
    const price = getByText("$7")
    expect(price).toBeInTheDocument()
})

const portalRoot = document.createElement('div')
portalRoot.setAttribute('id', 'modalAdditions')
document.body.appendChild(portalRoot)
it('should not check de input', () => {
    const { getByTestId, debug } = render(<Extras />)
    const checkbox = getByTestId("chicken")
    // debug()
    expect(checkbox.checked).toEqual(false)
})

/* it('should delete product', () => {
    const { getAllByTestId, getByText, debug } = render(<Summary  {...props} />)
    const iconDelete = getAllByTestId('iconDelete')
    //console.log(iconDelete[0]);
    fireEvent.click(iconDelete[0]);
    debug()
    //expect(getByText('Café americano')).not.toBeInTheDocument()
}) */

/* it('should check de input', () => {
    let props = {
        order: {
            items: [
                { id: 5, idItem: 0, dish: "Hamburguesa simple", price: 10, addittions: [], quantity: 1 },
                { id: 6, idItem: 0, dish: "Hamburguesa doble", price: 15, addittions: [], quantity: 1 }]
        },
        setOrder: jest.fn(),
        breakfasts: [
            { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
            { id: 2, dish: "Café americano", price: 5, quantity: 1 }],
        lunchs: [{ id: 7, dish: "Papas fritas", price: 5, quantity: 1 },
        { id: 8, dish: "Aros de cebolla", price: 5, quantity: 1 }]
    }
    const { getByTestId, debug } = render(<Extras {...props} />)
    const checkbox = getByTestId("chicken")
    fireEvent.click(checkbox)
    debug()
    expect(checkbox.checked).toEqual(true)
})  */


