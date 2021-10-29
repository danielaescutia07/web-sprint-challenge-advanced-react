import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const zip = screen.getByLabelText(/zip:/i)
    const state = screen.getByLabelText(/state:/i)
    const button = screen.getByRole('button')

    userEvent.type(firstName, 'Daniela')
    userEvent.type(lastName, 'Escutia')
    userEvent.type(address, '777 Hello Street')
    userEvent.type(city, 'Hello World')
    userEvent.type(zip, '12345')
    userEvent.type(state, 'World')
    userEvent.click(button)

    expect(screen.getByTestId('successMessage')).toHaveTextContent('You have ordered some plants! Woo-hoo!')
});
