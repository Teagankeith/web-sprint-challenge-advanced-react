import React from "react";
import { render, getByTestId, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   const {findAllByText} = render(<CheckoutForm/>)
   findAllByText(/React Plants/i)
});

test("can add a plant to the cart", () => {
    const { getByLabelText, findAllByText, getByTestId} = render(<CheckoutForm />);

      fireEvent.change(getByLabelText(/first name/i), {target: { value: "Teagan" }});
      fireEvent.change(getByLabelText(/last name/i), { target: { value: "Keith"}});
      fireEvent.change(getByLabelText(/address/i), {target: { value: "1234 abdcefg sss"}});
      fireEvent.change(getByLabelText(/city/i), {target: { value: "New York" }});
      fireEvent.change(getByLabelText(/state/i), { target: { value: "New York" }});
      fireEvent.change(getByLabelText(/zip/i), {target: { value: "0000000" }});
      const btn = document.querySelector("button");
      fireEvent.click(btn);
    

      findAllByText(/Teagan/i);
    
      expect(getByTestId("successMessage")).toBeInTheDocument();

});
