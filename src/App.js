import './App.css';


import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import NuevaVista from './components/Home/NuevaVista';
import ServiceComponent from './components/ServiceComponent/ServiceComponent';


function App() {
  
  return (
    <>
      <Switch>
        <Route path="/" exact element={<ServiceComponent />} /> 
        <Route path="/ficha-empleados" exact element={<NuevaVista />} /> 
      </Switch>        
    </>
  

  );
}

export default App;