import React, { useState } from "react";

const Checkout = ({ cartItems, shippingCost }) => {
  const [shippingToDifferentAddress, setShippingToDifferentAddress] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [agreeToDataUse, setAgreeToDataUse] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  const handlePlaceOrder = () => {
    if (!agreeToDataUse) {
      alert("Please agree to the personal data policy to place your order.");
      return;
    }
    // Handle order placement logic
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Details Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Second Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Country" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Town" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Post Code/ZIP" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <textarea placeholder="Notes on your order, e.g special notes about delivery." className="w-full border p-2 rounded"></textarea>
          </form>
        </div>

        {/* Shipping to a Different Address Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping to a Different Address</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="shippingAddressCheckbox"
              checked={shippingToDifferentAddress}
              onChange={() => setShippingToDifferentAddress(!shippingToDifferentAddress)}
              className="mr-2"
            />
            <label htmlFor="shippingAddressCheckbox">Use a different shipping address</label>
          </div>
          {shippingToDifferentAddress && (
            <form className="space-y-4">
              <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Second Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Country" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Town" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Post Code/ZIP" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
              <textarea placeholder="Notes on your order, e.g special notes about delivery." className="w-full border p-2 rounded"></textarea>
            </form>
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Your Order</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <p>{item.name}</p>
                <p className="text-gray-600">x{item.quantity}</p>
              </div>
              <p>KSh{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>KSh {calculateTotal().toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="space-y-4">
          <div>
            <input
              type="radio"
              id="mpesa"
              name="payment"
              value="M-Pesa"
              checked={selectedPayment === 'M-Pesa'}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <label htmlFor="mpesa" className="ml-2">M-Pesa</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="payment"
              value="PayPal"
              checked={selectedPayment === 'PayPal'}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <label htmlFor="paypal" className="ml-2">PayPal</label>
          </div>
        </div>
      </div>

      {/* Privacy Policy Agreement */}
      <div className="mt-4 flex items-start">
        <input
          type="checkbox"
          id="agreeToDataUse"
          checked={agreeToDataUse}
          onChange={() => setAgreeToDataUse(!agreeToDataUse)}
          className="mr-2"
        />
        <label htmlFor="agreeToDataUse" className="text-gray-600 text-sm">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </label>
      </div>

      {/* Place Order Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
        >
          Place Order Kshs {calculateTotal().toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
