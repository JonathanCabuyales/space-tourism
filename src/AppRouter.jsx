import { lazy } from 'react';
import { HashRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Route } from 'react-router-dom';

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

  // const router = createHashRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<IndexPage />}  />,
  //       <Route path='/destination' element={<DestinationPage />} />
  //       <Route path='/crew' element={<PageCrew />} />
  //       <Route path='/technology' element={<TechPage />} />
  //     </>
  //   ),
  //   {
  //     basename: "/space-tourism/"
  //   }
  // )

  // const router = <HashRouter>
  //   <Route path='/' element={<IndexPage />} />
  //   <Route path='/destination' element={<DestinationPage />} />
  //   <Route path='/crew' element={<PageCrew />} />
  //   <Route path='/technology' element={<TechPage />} />
  // </HashRouter>
  return (
    <LoadingComponent>
      <RouterProvider router={router} />
    </LoadingComponent>

  )
}

export default AppRouter
