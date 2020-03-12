import React from 'react';
import './App.css';
import Registration from './Components/registration';
import {BrowserRouter ,Route} from 'react-router-dom'
import Feed from './Components/feed'
import Signin from './Components/signIn';
import Pago from './Components/payBills';
import AddAccount from './Components/addAccount';
import PaymentMethod from './Components/paymentMethod';
import CreditCard from './Components/creditCard';
import CreditCardResumen from './Components/creditCardResumen';
import DebitCard from './Components/debitCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/" component={ Registration}></Route>
      <Route path="/Signin" component={Signin}></Route>
      <Route path="/Feed" component={Feed}></Route>
      <Route path="/Pago" component={Pago}></Route>
      <Route path="/AddAccount" component={AddAccount}></Route>
      <Route path="/PaymentMethod" component={PaymentMethod}></Route>
      <Route path="/CreditCard" component={CreditCard}></Route>
      <Route path="/CreditCardResumen" component={CreditCardResumen}></Route>
      <Route path="/DebitCard" component={DebitCard}></Route>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
