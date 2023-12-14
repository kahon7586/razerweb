import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Router/Layout';
import Router from './Components/Router/Router';



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Router>
        </Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
