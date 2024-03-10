import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Background from './Backgroung';

const router=createBrowserRouter([
{
      path:"/",
      element:<Dashboard />
},
{
      path:"/background",
      element:<Background />
}
]);
const App = () => {
  return <>
  <RouterProvider router={router} />
  </>;
};
export default App;
