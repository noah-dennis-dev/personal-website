import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import AOC2023 from './pages/AOC2023.jsx';
import AOC2023Day from './pages/AOC2023Day.jsx';
import Articles from './pages/articles.jsx';
import ChatApplicationUsingWebsockets from './pages/chat-application-using-websockets.jsx';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/articles",
    element: <Articles />
  },
  {
    path: "/articles/chat-application-using-websockets",
    element: <ChatApplicationUsingWebsockets />
  },
  {
    path: "/advent-of-code-2023",
    element: <AOC2023 />
  },
  {
    path: "/advent-of-code-2023/*",
    element: <AOC2023Day />
  },
  {
    path: "/*",
    element: <p style={{ color: '#FFF' }}>Unknown Route</p>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
