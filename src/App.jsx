import { useRoutes } from 'react-router-dom';
import './App.css';
import DisplayMode from './components/DisplayMode/DisplayMode';
import Support from './components/Support/Support';
import routes from './routes';

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <DisplayMode />
      <Support />
      {router}
    </>
  )
}

export default App;
