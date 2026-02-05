import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { FormData } from '../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState<{
    text: string;
    type: 'success' | 'error' | '';
  }>({ text: '', type: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );

    setFormMessage({
      text: 'Thank you for your message! We will get back to you soon.',
      type: 'success',
    });

    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    setFormMessage({
      text: 'Failed to send message. Please try again.',
      type: 'error',
    });
  }
};

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <div className="inline-block mb-6">
                <svg
                  className="w-16 h-16 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 1800 1800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M531.087,344.727c0.247,0,0.492,0.033,0.739,0.033h453.558c16.819,0,30.444-13.625,30.444-30.436 c0-16.815-13.625-30.435-30.444-30.435H638.226H531.826c-16.811,0-30.44,13.62-30.44,30.435 C501.386,330.885,514.624,344.331,531.087,344.727z" />
                  <path d="M531.826,497.389h749.422c16.814,0,30.443-13.629,30.443-30.439c0-16.814-13.629-30.439-30.443-30.439 H531.826c-16.811,0-30.44,13.625-30.44,30.439C501.386,483.76,515.016,497.389,531.826,497.389z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Send us a message!
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-xl text-gray-700"></i>
                <p className="text-gray-700">00971 4 369 8056/ 57</p>
              </div>

              <div className="flex items-center space-x-4">
                <i className="far fa-envelope text-xl text-gray-700"></i>
                <p className="text-gray-700">ceo@icekettlejwelry.com</p>
              </div>

              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-xl text-gray-700 mt-1"></i>
                <p className="text-gray-700">20G, Almas Tower, JLT, Dubai, UAE</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs font-semibold mb-4 uppercase">
                Stay in the loop and follow us!
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/971043698056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                >
                  <i className="fab fa-whatsapp text-white text-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/icekettle.Jeweller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                >
                  <i className="fab fa-instagram text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <p className="text-xs text-gray-600">
                You agree to receive email communication from us by submitting this
                form.
              </p>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
                >
                  Submit
                </button>
                {formMessage.text && (
                  <div
                    className={`mt-4 p-4 rounded ${
                      formMessage.type === 'success'
                        ? 'bg-green-100 border border-green-400 text-green-700'
                        : 'bg-red-100 border border-red-400 text-red-700'
                    }`}
                  >
                    {formMessage.text}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
