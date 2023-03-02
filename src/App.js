import React from "react";
import Login from "./components/pages/auth/Login";
import Batch from "./components/pages/admin/Batch";
import Mentor from "./components/pages/admin/Mentor";
import Request from "./components/pages/admin/Request";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// root route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/batch",
    element: <Batch></Batch>
  },
  {
    path: "/mentor",
    element: <Mentor></Mentor>
  },
  {
    path: "/request",
    element: <Request></Request>
  },
 
]);


function App() {
  return (
    <main>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </main>
  );
}

export default App;
