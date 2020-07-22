import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H7c72CpZEG9YXK93Iy6d3W8eD1xIUzHU026P3tcRJ2zOQdUOdevd6qNpOcrOCJNQiy9kQlGiZIb4XD0KMDiVqBV00IDjzRHIr";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => alert("hi")}
      stripeKey={publishableKey}
    />
  );
};
