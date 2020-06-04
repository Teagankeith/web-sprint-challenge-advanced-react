import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), {target: {value: 'Teagan'}});
    fireEvent.change(getByLabelText(/last name/i), {target: {value: 'Keith'}});
    fireEvent.change(getByLabelText(/adress/i), {target: {value: '659 West Outer Drive'}});
    fireEvent.change(getByLabelText(/city/i), {target: {value: 'Oak Ridge'}});
    fireEvent.change(getByLabelText(/state/i), {target: {value: 'Tennessee'}});
    fireEvent.change(getByLabelText(/zip/i), {target: {value: '37830'}});
    
    
    const button = getByTestId('checkoutButton');
    fireEvent.click(button);

    findAllByText(/Teagan/i)

    expect(getByTestId('successMessage')).toBeInTheDocument();



});
