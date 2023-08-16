
import Home from '../pages/home';
import About from '../pages/about';
import Home from '../pages/errorpage';
const router = createBrowserRouter([
    {
      path : '/',
      element: <Home />
    },
    {
      path : '/about',
      element: <About />
    },
    {
      path : '/error',
      element: <ErrorPage />
    },
  ])
export {router};