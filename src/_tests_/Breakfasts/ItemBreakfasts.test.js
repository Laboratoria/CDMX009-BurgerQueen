import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemBreakfast from '../../components/Breakfasts/ItemBreakfast';


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

