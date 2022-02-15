import { useState } from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  /**
   * This is where your custom logic for authentication goes.
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return (
      <div className="secured-outlet">
        <h1>Private Layout</h1>
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <h1>Private Layout</h1>
      <p>This is a private layout. You must be logged in to view this page.</p>
      <p>
        <button
          onClick={() => {
            setIsAuthenticated(true);
          }}
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default PrivateLayout;
