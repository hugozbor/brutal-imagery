
import React from 'react';

/**
 * ContactWindow Component - Displays contact information and a message form
 * Includes email, phone, location, and a contact form
 */
const ContactWindow = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-mono font-bold text-lg">Contact Information</h2>
      
      {/* Contact Details Section */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        <div className="space-y-3">
          
          {/* Email Contact */}
          <div className="flex items-center space-x-3">
            <span className="text-lg">📧</span>
            <div>
              <div className="font-mono font-bold text-sm">Email</div>
              {/* Edit this email to your actual contact email */}
              <div className="font-mono text-xs text-gray-600">hello@artist.com</div>
            </div>
          </div>
          
          {/* Phone Contact */}
          <div className="flex items-center space-x-3">
            <span className="text-lg">📱</span>
            <div>
              <div className="font-mono font-bold text-sm">Phone</div>
              {/* Edit this phone number to your actual number */}
              <div className="font-mono text-xs text-gray-600">+1 (555) 123-4567</div>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center space-x-3">
            <span className="text-lg">📍</span>
            <div>
              <div className="font-mono font-bold text-sm">Location</div>
              {/* Edit this location to your actual location */}
              <div className="font-mono text-xs text-gray-600">New York, NY</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        <h3 className="font-mono font-bold mb-2">Send Message</h3>
        
        {/* Simple contact form - currently non-functional */}
        {/* To make functional, add form handling with onSubmit and state management */}
        <form className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-400 p-1 font-mono text-xs"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-400 p-1 font-mono text-xs"
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="w-full border border-gray-400 p-1 font-mono text-xs resize-none"
          />
          <button 
            type="submit"
            className="bg-gray-300 border-2 border-gray-600 px-4 py-1 font-mono text-xs hover:bg-gray-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactWindow;
