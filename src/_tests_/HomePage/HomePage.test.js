import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '../../components/HomePage/HomePage'

it('should render an image', () => {
    const { queryByRole, debug } = render(<HomePage />)
    debug()
    const img = queryByRole("img")
    expect(img).toBeInTheDocument()
})

it('should render a kitchen button', () => {
    const { getByRole, debug } = render(<HomePage />)
    debug()
    const buttonKitchen = getByRole("button", { name: /Cocina/i })
    expect(buttonKitchen).toBeInTheDocument()
})

it('should render a waiter button', () => {
    const { getByRole, debug } = render(<HomePage />)
    debug()
    const buttonWaiter = getByRole("button", { name: /Mesero/i })
    expect(buttonWaiter).toBeInTheDocument()
})