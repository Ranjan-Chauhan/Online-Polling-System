import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import CreatePoll from "./components/CreatePoll.jsx";
import PollsList from "./components/PollsList.jsx";
import PollsDetails from "./components/PollsDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConfirmationPage from "./components/ConfirmationPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "pollslist",
//         element: (
//           <PollsList />
//           // <AuthLayout authentication={false}>
//           //   <Login />
//           // </AuthLayout>
//         ),
//       },
//       {
//         path: "createpoll",
//         element: <CreatePoll />,
//       },
//       {
//         path: "polldetails",
//         element: <PollsDetails />,
//       },
//       {
//         path: "/confimationpage",
//         element: <ConfirmationPage />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
