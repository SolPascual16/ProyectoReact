import React from 'react';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {NavBar} from './components/NavBar/NavBar';
import { Compra } from './components/compra/compra';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Form } from './components/Form.js/Form';
import { CartScreen } from './components/cartScreen/cartScreen';
import { UIProvider } from './context/UIContext';
import { CartProvider } from './context/cartContext';

function App() {

  return (
    <>
      <UIProvider>
        <CartProvider>
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
                <CartScreen/>
                </Route>
                <Route exact path = "/Compra"> 
                <Compra/>
                </Route>

                <Route  path ="*"> 
                <Redirect to="/"/>  
                </Route>

            </Switch>

          </BrowserRouter>
        </CartProvider>
      </UIProvider> 
    </>
  );
}

export default App;
