import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomersPage from './Page/CustomersPage'
import EmployeePage from './Page/EmployeePage'
import PageProvider from './Context/PageProvider'

const router = createBrowserRouter([
  {path: "/", element: <CustomersPage/>},
  {path: "/employeePage", element: <EmployeePage/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <PageProvider>
    <RouterProvider router={router} />
   </PageProvider>
  </StrictMode>
);
