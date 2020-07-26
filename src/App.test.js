import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import BreakfastMenu from './components/dashboard/menuCards/BreakfastCards';
import DinnerCards from './components/dashboard/menuCards/DinnerCards';
import ModalAdmin from './components/admin/ModalAdmin';
import SignIn from './components/auth/SignIn';
import BurgerQueen from './components/BQ/BurgerQueen';
import ClientInfoForm from './components/dashboard/client-Info/ClientInfo';

describe('Renders dashboard', () => {
  it('renders dasboard resume menu', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Resumen del pedido');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders sidenav elements', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Administración');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders menu button', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('menu');
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Render menu cards', () => {
  it('render breakfast cards data', () => {
    const { getByRole } = render(<BreakfastMenu />);
    const role = getByRole('list');
    expect(role).toBeInTheDocument();
  });
  it('render dinner cards data', () => {
    const { getByRole } = render(<DinnerCards />);
    const role = getByRole('list');
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
  });
});

describe('Renders sign in', () => {
  it('render email label', () => {
    const { getByText } = render(<SignIn />);
    const linkElement = getByText('Correo');
    expect(linkElement).toBeInTheDocument();
  });
  it('render password label', () => {
    const { getByText } = render(<SignIn />);
    const linkPassword = getByText('Contraseña');
    expect(linkPassword).toBeInTheDocument();
  });
  it('render bq logo', () => {
    const { getByAltText } = render(<SignIn />);
    const searchAltText = getByAltText('logo');
    expect(searchAltText).toBeInTheDocument();
  });
});

describe('Render initial view', () => {
  it('render bq image', () => {
    const { getByAltText } = render(<BurgerQueen />);
    const searchAltText = getByAltText('logo');
    expect(searchAltText).toBeInTheDocument();
  });
  it('render button login', () => {
    const { getByRole } = render(<BurgerQueen />);
    const loginButton = getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });
});

describe('Render client info', () => {
  it('render buttons', () => {
    const { getByText } = render(<ClientInfoForm />);
    const text = getByText('Enviar');
    expect(text).toBeInTheDocument();
  });
});
