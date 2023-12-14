import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Router/Layout';
import Router from './Components/Router/Router';

///456
///asdasd

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
