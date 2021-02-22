import Homepage from './pages/homepage/Homepage.component'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component'






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
     

      </Switch>
      
      
    </div>
  );
}

export default App;
