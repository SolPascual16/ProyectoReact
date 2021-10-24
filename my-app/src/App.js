import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {NavBar} from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartWidget } from './components/NavBar/CartWidget';
import { Form } from './components/Form.js/Form';





function App() {

  return (
    <>
    <BrowserRouter>

    <NavBar/>

    <Switch>

      <Route exact path = "/"> 
              <ItemListContainer />
      </Route>

      <Route exact path="/productos/:categoryId">
              <ItemListContainer />
      </Route>

      <Route exact path="/Detail/:itemId">
        <ItemDetailContainer/>
      </Route>

      <Route exact path = "/Contacto"> 
        <Form/>
      </Route>

      <Route exact path = "/Cart"> 
        <CartWidget/>
      </Route>

      <Route  path ="*"> 
      <Redirect to="/"/>  
      </Route>

    </Switch>

    </BrowserRouter>
    </>    
  );
}

export default App;
