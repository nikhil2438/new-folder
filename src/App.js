import React, { useState } from "react";
import UpdatePassword from "./UpdatePassword"; // Import the UpdatePassword component

function App() {
  const [showUpdatePassword, setShowUpdatePassword] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {showUpdatePassword && (
          <UpdatePassword onBack={() => setShowUpdatePassword(false)} />
        )}
      </div>
    </div>
  );
}

export default App;
