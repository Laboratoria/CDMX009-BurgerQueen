import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Order from '../../components/Order/Order'

describe('should render Order', () => {
    let props = {
        breakfasts: [{ id: 1, dish: "Café con leche", price: 7, quantity: 1 }, { id: 2, dish: "Café americano", price: 5, quantity: 1 }],
        lunchs: [{ id: 5, dish: "Hamburguesa simple", price: 10, addittions: [], quantity: 1 }, { id: 6, dish: "Hamburguesa doble", price: 15, addittions: [], quantity: 1 }],
        order: {
            waiter: "",
            client: "",
            table: "",
            items: [],
            totalProducts: 0,
            total: 0,
            state: "pending"
        },
        setOrder: jest.fn()

    }
    it('should render a Waiters select', () => {
        const { queryAllByRole, debug } = render(<Order {...props} />)
        //debug()
        const selectWaiter = queryAllByRole("combobox")

        expect(selectWaiter)
    })


    it('Header should send to Home ', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const linkHome = getByRole("link", { name: /Burguer Queen/ })
        expect(linkHome).toBeInTheDocument()
    })

    it('should render an input to client ', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const inputName = getByRole("textbox")
        expect(inputName).toBeInTheDocument()
    })

    it('should render a btn Breakfast', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const btnBreakfast = getByRole("button", { name: /Desayuno/ })
        expect(btnBreakfast).toBeInTheDocument()
    })
    it('should render a btn Comida', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const btnLunch = getByRole("button", { name: /Comida/ })
        expect(btnLunch).toBeInTheDocument()
    })
    it('should render a btn Send Kitchen', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const btnKitchen = getByRole("button", { name: /Enviar Cocina/ })
        expect(btnKitchen).toBeInTheDocument()
    })
    it('should render a btn Cancel', () => {
        const { getByRole, debug } = render(<Order {...props} />)
        //debug()
        const btnCancel = getByRole("button", { name: /Cancelar orden/ })
        expect(btnCancel).toBeInTheDocument()
    })
    it('should render cafe americano', () => {
        const { getByText, debug } = render(<Order {...props} />)
        //debug()
        const cafeAmericano = getByText('Café americano')
        expect(cafeAmericano).toBeInTheDocument()
    })

    it('should render Comida Menu', () => {
        const { getByRole, getByText, debug } = render(<Order {...props} />)
        //debug()
        const btnLunch = getByRole("button", { name: /Comida/ })
        fireEvent.click(btnLunch);
        debug()
        expect(getByText('Hamburguesa simple')).toBeInTheDocument()
    })

    it('should render Desayuno Menu', () => {
        const { getByRole, getByText, debug } = render(<Order {...props} />)
        //debug()
        const btnBreakfast = getByRole("button", { name: /Desayuno/ })
        fireEvent.click(btnBreakfast);
        debug()
        expect(getByText('Café con leche')).toBeInTheDocument()
    })
}) 