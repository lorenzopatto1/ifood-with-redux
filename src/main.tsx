import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/global.ts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App.tsx';
import { Home } from './routes/Home';
import { Restaurant } from './routes/Restaurant';
import { ErrorPage } from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant/mcdonalds",
        element: <Restaurant />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Provider store={store}>
   <GlobalStyle />
      <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
