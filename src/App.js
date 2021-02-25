import Homepage from './pages/homepage/Homepage.component'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component'
import SignInAndOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';






function App() {
  return (
    <div >
    <Header/>
      <Switch>

      <Route exact path='/' component={Homepage}>
        <Homepage/>
      </Route>

      <Route exact path='/shop' component={ShopPage}>
        <ShopPage/>
      </Route>

      <Route exact path='/sign' component=  {SignInAndOut}>
        <SignInAndOut/>
      </Route>
     
     

      </Switch>
      
      
    </div>
  );
}

export default App;
