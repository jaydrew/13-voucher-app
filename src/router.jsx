import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import SalePage from './pages/SalePage.jsx';
import VoucherPage from './pages/VoucherPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router =  createBrowserRouter(
    [
        {
           path: '/',
          element: <Layout />,
          errorElement: <NotFoundPage />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },
            {
              path: '/product',
              element: <ProductPage />,
            },
            {
              path: '/sale',
              element: <SalePage />,
            },
            {
              path: '/voucher',
              element: <VoucherPage />,
            },
          ],
        },
       
     ]
);


export default router;