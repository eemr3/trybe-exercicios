import React from 'react'
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Verify that email validation is working', () => {
  it('Testing a component, if the email is valid.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testing a component if the email is invalid.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testing if the validation message appears only after submission', () => {
    const EMAIL_USER = '';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });

  it('Testing if the component has green text when entering a valid email.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValid = screen.queryByTestId('id-is-email-valid');
    expect(isValid).toHaveAttribute('class', 'green-text');
  });

  it('Testing if the component has red text when entering an invalid email.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={EMAIL_USER}/>);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).toHaveAttribute('class', 'red-text');
  });
});