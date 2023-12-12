import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/Router'
import "@fontsource/open-sans";
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
