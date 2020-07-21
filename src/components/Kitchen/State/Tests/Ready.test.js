import React from 'react';
import { render } from '@testing-library/react';
import Ready from '../Ready';

it('Delevery btn', () =>{
    let props ={
        readys: {
            date: '1594214668', 
            deliveryDate: '648000000', 
            table: '4', 
            state: 'ready',
            id: '9sQX5kVbKE00V9D9A8is',  
        }
    }
    const { queryByText } = render(<Ready {...props} />); 
    const f = queryByText('4'); 
    expect(f).toBeInTheDocument()  
}); 