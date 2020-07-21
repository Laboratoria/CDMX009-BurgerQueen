import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Kitchen from '../Kitchen';

describe('Kitchen componets testing', () =>{
it('Kitchen view ', () =>{
    let props ={
        orders: {
            client:"Raul", 
            table: "3",
            id: "7xJqehKcssw4n4SfeizS",
            items:[{
                img: "/static/media/coffeMilk.d1608cd7.png",
                price: 7, 
                quantity: 1,
                dish: "Café con leche", 
                id: 1}],
            state: "pending"
        } 
    }
    const { queryByText } = render(<Kitchen {...props} />); 
    const array = queryByText("Café con leche"); 
    expect(array).toBeInTheDocument();  
}); 
}); 
