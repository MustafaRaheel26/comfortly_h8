"use client";

import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import { Product } from "@/types/products";
import { useRouter } from "next/navigation";
import { client } from "@/src/sanity/lib/client";
import Swal from "sweetalert2";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "Cash on Delivery",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      _type: "order",
      customerName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      paymentMethod: formData.paymentMethod,
      totalAmount: cartItems.reduce((total, item) => total + (item.price || 0) * item.inventory, 0),
      totalItems: cartItems.reduce((total, item) => total + item.inventory, 0),
      items: cartItems.map((item) => ({
        _key: item._id,
        product: { _type: "reference", _ref: item._id },
        quantity: item.inventory,
        price: item.price,
      })),
      status: "Pending",
      orderDate: new Date().toISOString(), // Adds the current date and time
      paymentDetails:
        formData.paymentMethod === "Credit Card"
          ? { cardNumber: formData.cardNumber, expiryDate: formData.expiryDate, cvv: formData.cvv }
          : null,
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("cart");
      Swal.fire({
        icon: "success",
        title: "Order Placed",
        text: "Your order has been placed successfully.",
      }).then(() => {
        router.push("/cart");
        window.dispatchEvent(new CustomEvent("cart-updated"));
      });
    } catch (error) {
      console.error("Order placement error:", error);
      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: "Failed to place order. Try again!",
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#007580]">Checkout</h2>
      {loading ? (
        <p className="text-center text-xl">Loading your order details...</p>
      ) : cartItems.length > 0 ? (
        <form onSubmit={handleOrderSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-[#007580] text-white p-2 rounded hover:bg-[#005f5f]">Confirm Order</button>
        </form>
      ) : (
        <p className="text-center text-xl">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
