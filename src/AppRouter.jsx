import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const IndexPage = lazy(() => import('./pages/indexPage'));
const DestinationPage = lazy(() => import('./pages/destination'));
const PageCrew = lazy(() => import('./pages/crew/crew'));
const TechPage = lazy(() => import('./pages/technology/index'));


const LoadingComponent = lazy(() => import('./components/loading/loading'));
function AppRouter() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <IndexPage />,

  //   },
  //   {
  //     path: "destination",
  //     element: <DestinationPage />
  //   },
  //   {
  //     path: "crew",
  //     element: <PageCrew />
  //   },
  //   {
  //     path: "technology",
  //     element: <TechPage />
  //   }
  // ])
  // const router = createBrowserRouter(
  //   createRoutesFromElements(

  //   )
  // )
  return (
    <LoadingComponent>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />}>
          </Route>
          <Route path='destination' element={<DestinationPage />} />
          <Route path='crew' element={<PageCrew />} />
          <Route path='technology' element={<TechPage />} />
        </Routes>
      </BrowserRouter>
    </LoadingComponent>
  )
}

export default AppRouter
