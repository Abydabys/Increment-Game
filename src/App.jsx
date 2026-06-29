import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css'
import {Layout} from './componets/Layout'
import DashboardPage from './pages/DashboardPage'
import UpgradePage from './pages/UpgradePage'
import UpgradePage2 from './pages/UpgradePage2'
import UpgradePage3 from './pages/UpgradePage3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/upgrade', element: <UpgradePage /> },
      { path: '/upgrade2', element: <UpgradePage2 /> },
      { path: '/upgrade3', element: <UpgradePage3 /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}

