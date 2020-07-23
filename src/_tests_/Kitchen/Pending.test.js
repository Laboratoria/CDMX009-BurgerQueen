import React from 'react';
import { render } from '@testing-library/react';
import Pending from '../../components/Kitchen/State/Pending';

it('Delevery btn', () => {
    let props = {
        pendings: {
            table: '6',
            state: 'pending',
            id: '9sQX5kVbKE00V9D9A8is',
        }
    }
    const { queryByText } = render(<Pending {...props} />);
    const f = queryByText('6');
    expect(f).toBeInTheDocument()
}); 