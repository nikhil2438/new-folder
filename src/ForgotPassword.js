// src/ForgotPassword.js
import React, { useState } from 'react';

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Here, you can add logic to handle the password reset, e.g., API call.
    setMessage('Password has been reset successfully.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      {message && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          {message}
        </div>
      )}
      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter new password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
      <button
        className="mt-4 text-blue-500 hover:underline"
        onClick={onBack}
      >
        Back to Login
      </button>
    </div>
  );
}

export default ForgotPassword;
