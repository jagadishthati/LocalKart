import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{createBrowserRouter,RouterProvider} from"react-router-dom";
import reportWebVitals from './reportWebVitals';
import Cart from './Pages/Cart';
import Context from './Context/Context';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router}/>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
