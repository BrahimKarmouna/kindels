"use client";
import React, { useState } from 'react';
import candle from "@/images/candle.jpg";
import Image from 'next/image';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      console.log("Error sending message");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white rounded shadow-md w-full max-w-5xl">
        <div className="lg:w-1/2 p-8 w-full">
          <h1 className="text-2xl font-bold mb-6 lg:text-left text-center">Contactez-nous</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                minLength={3}
                maxLength={150}
                required
                className="p-4 bg-gray-50 border border-gray-100"
                autoComplete="off"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                minLength={5}
                maxLength={150}
                required
                className="p-4 bg-gray-50 border border-gray-100"
                autoComplete="off"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-bold text-gray-800" htmlFor="message">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                minLength={10}
                maxLength={500}
                className="w-full p-4 bg-gray-50 border border-gray-100"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 lg:block hidden">
          <Image src={candle} alt="Candle" className="object-cover w-full h-full rounded-r" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
