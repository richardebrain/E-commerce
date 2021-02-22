import Homepage from './pages/homepage/Homepage.component'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';






function App() {
  return (
    <div >
      <Switch>

      <Route exact path='/' component={Homepage}>
        <Homepage/>
      </Route>

      <Route exact path='/shop' component={ShopPage}>
        <ShopPage/>
      </Route>
     

      </Switch>
      
      
    </div>
  );
}

export default App;
