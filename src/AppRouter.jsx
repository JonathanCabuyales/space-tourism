import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const IndexPage = lazy(() => import('./pages/indexPage'));
const DestinationPage = lazy(() => import('./pages/destination/destination'));
const PageCrew = lazy(() => import('./pages/crew/crew'));
const TechPage = lazy(() => import('./pages/technology/index'));


const LoadingComponent = lazy(() => import('./components/loading/loading'));
function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,

    },
    {
      path: "destination",
      element: <DestinationPage />
    },
    {
      path: "crew",
      element: <PageCrew />
    },
    {
      path: "technology",
      element: <TechPage />
    }
  ],{
    basename: "/space-tourism/"
  })
  return (
    <LoadingComponent>
      <RouterProvider router={router}/>
    </LoadingComponent>
  )
}

export default AppRouter
