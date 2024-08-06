import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import FormLogin from "./componentes/FormLogin.jsx";
import FormRegister from './componentes/FormRegister.jsx';
import HomePage from './pages/HomePage.js';
// import Post from './componentes/Post.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/*' element={<FormLogin />} />
          <Route path='/form-login' element={<FormLogin />} />
          <Route path='/form-register' element={<FormRegister />} />
          <Route path='/home-page' element={<HomePage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
