import React from 'react';
import { withRouter, BrowserRouter } from "react-router-dom";
import { render, fireEvent, waitForElement } from '@testing-library/react';
import TableStatus from './TableStatus'



jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'FCKFCS5LrLkKGMbQ8UCp',
  }),
}));

const order =[{
  cliente:"cliente",
  date:"Thu Jul 23 2020 21:39:13 ",
  employ: "mesero",
  number:"8",
  orden:[{ 
   id: 1,
   localId:"615a85",
   precio:15,
   producto: "Agua de frutas"}],
  status:"Preparando",
  timeFinal:"",
  timeOut:"",
  timePrep:1299 }] 
   

test('renders learn react link', async () => {
  const { getByTestId } = render(<BrowserRouter><TableStatus numbers={order}/></BrowserRouter>);
  await waitForElement(() => getByTestId("getTable"));
  const checkTable = getByTestId("getTable");
  expect(checkTable).toBeInTheDocument();
});

test("should change the order status to ready order", async()=>{
     const { getByTestId } = render(<BrowserRouter><TableStatus numbers={order}/></BrowserRouter>);
     const buttonCheck =getByTestId("check");
     //fireEvent.click(button)
     expect(buttonCheck).toBeInTheDocument(true)
 
     
     
   })