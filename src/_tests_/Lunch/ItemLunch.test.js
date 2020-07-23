import React from 'react'
import { render } from '@testing-library/react'
import ItemLunch from '../../components/Lunch/ItemLunch'


it('should render image ', () => {
    const { queryByRole, debug } = render(<ItemLunch />)
    //debug()
    const img = queryByRole("img")
    expect(img).toBeInTheDocument()
})

it('should render dish properties', () => {
    let props = {
        idItem: 5,
        dish: 'Hamburguesa simple',
        price: 10,
    }

    const { getByText, debug } = render(<ItemLunch {...props} />)
    debug()
    const nameDish = getByText("Hamburguesa simple")
    expect(nameDish).toBeInTheDocument()

})