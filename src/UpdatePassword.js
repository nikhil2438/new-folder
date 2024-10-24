import axios from "axios";
import { useState } from "react";

function UpdatePassword({ onBack }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Make an API call to update the password
      const response = await axios.post(
        "https://e-commerce-backend-lc8o.onrender.com/users/reset-password",
        {
          newPassword,
        }
      );

      if (response.status === 200) {
        setMessage("Password has been updated successfully.");
      } else {
        setMessage("Failed to update the password.");
      }
    } catch (error) {
      setMessage("An error occurred while updating the password.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <button onClick={onBack} className="text-blue-500 hover:underline mb-4">
        Back
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default UpdatePassword;
