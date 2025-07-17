import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Carrito, Login } from './Pages/index.ts'
import { Footer, Home, LayoutHome } from './components/index.ts'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome />, // continuar aqui para hacer un layout
    children: [
      { index: true, element: <Home /> },
      {
        path: '/prueba', element: <Footer />,
      }
    ]
  },
  {
    path: '/carrito',
    element: <Carrito />
  },
  {
    path: '/login',
    element: <Login />
  },
])

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </QueryClientProvider>
)
