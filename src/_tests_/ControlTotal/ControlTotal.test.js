import React from 'react'
import { render } from '@testing-library/react'
import ControlTotal from '../../components/ControlTotal/ControlTotal'


let props = {
    order: {
        items: [
            { id: 1, dish: "Café con leche", price: 7, quantity: 1 },
            { id: 2, dish: "Café americano", price: 5, quantity: 1 }]
    },
    setOrder: jest.fn()
}

it('should render total products', () => {

    const { getByText, debug } = render(<ControlTotal {...props} />)
    debug()
    const products = getByText('Productos: 2')
    expect(products).toBeInTheDocument()
})

it('should render total price', () => {

    const { getByText, debug } = render(<ControlTotal {...props} />)
    debug()
    const price = getByText('Total: $12.00')
    expect(price).toBeInTheDocument()
})