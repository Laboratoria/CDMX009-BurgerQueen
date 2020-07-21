import React from 'react';
import { render } from '@testing-library/react';
import HeaderPrincipal from './HeaderPrincipal';

it('should render header', () => {
    const { getByRole, debug } = render(<HeaderPrincipal />)
    // debug()
    const header = getByRole("heading", { name: /burguer/i })
    expect(header).toBeInTheDocument()
})