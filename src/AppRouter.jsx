import { useEffect } from 'react';
import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const IndexPage = lazy(() => import('./pages/indexPage'));
const DestinationPage = lazy(() => import('./pages/destination'));
const PageCrew = lazy(() => import('./pages/crew/crew'));
const TechPage = lazy(() => import('./pages/technology/index'));


const LoadingComponent = lazy(() => import('./components/loading/loading'));
function AppRouter() {
  const router = createHashRouter([
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
      element: <TechPage />,

    }
  ]
  );

  useEffect(() => {
    localStorage.setItem('index', JSON.stringify(0));
  
    return () => {
      localStorage.removeItem('index');
    }
  }, [])
  

  return (
    <LoadingComponent>
      <RouterProvider router={router} />
    </LoadingComponent>

  )
}

export default AppRouter
