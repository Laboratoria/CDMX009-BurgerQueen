import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../components/Header/Header';

describe("Testing of header componets", () => {
    it('Title', () => {
        const { getByRole, debug } = render(<Header />);
        const title = getByRole("heading", { name: /Burger/ });
        debug();
        expect(title).toBeInTheDocument();
    })

    it('hiden modal', () => {
        const { queryByRole, debug } = render(<Header />);
        const icon = queryByRole("i");
        debug();
        expect(icon).not.toBeInTheDocument();
    })
}); 