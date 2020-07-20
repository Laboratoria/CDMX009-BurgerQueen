import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import BreakfastMenu from './components/dashboard/menuCards/BreakfastCards';
import ModalAdmin from './components/admin/ModalAdmin';
import SignIn from './components/auth/SignIn';
import { act } from 'react-dom/test-utils';

describe('Renders dashboard', () => {
  test('renders dasboard resume menu', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Resumen del pedido');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders sidenav elements', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Administración');
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Test render menu cards', () => {
  test('render cards data', () => {
    const { getByRole } = render(<BreakfastMenu />);
    let role = getByRole('list');
    expect(role).toBeInTheDocument();
  });
});

describe('Modal input value', () => {
  it('updates name on change', () => {
    const { getByPlaceholderText } = render(<ModalAdmin />);
    const searchInput = getByPlaceholderText('Nombre');
    fireEvent.change(searchInput, { target: { value: 'Juan Gonzales' } });
    expect(searchInput.value).toBe('Juan Gonzales');
  });

  it('updates email on change', () => {
    const { getByPlaceholderText } = render(<ModalAdmin />);
    const searchInput = getByPlaceholderText('Correo');
    fireEvent.change(searchInput, { target: { value: 'juan@burgerqueen.mx' } });
    expect(searchInput.value).toBe('juan@burgerqueen.mx');
  })
});

describe('Renders sign in', () => {
  test('render cards data', () => {
    const { getByText } = render( <SignIn />);
    const linkElement = getByText('Correo');
    expect(linkElement).toBeInTheDocument();
  });
});

/* global.fetch = jest.fn(() => 
Promise.resolve({
  json:() => 
  Promise.resolve({
    id: 1,
    item: "Café americano",
    price: 5,
    image: "Aqui va la imagen"
  })
})
)

describe ('cards', () => {
  it('loads menu data', () => {
    act(() => render ( <BreakfastMenu /> ));
    expect(screen.getByText('Café americano')).toBeInTheDocument();
  });
}); */