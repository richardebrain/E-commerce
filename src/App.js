import Homepage from './pages/homepage/Homepage.component'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component'
import SignInAndOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import React,{Component} from 'react';
import {auth} from './firebase/firebase.utils'






class App extends  Component{
  constructor(){
    super()
    this.state={
      currentUser:null,
    }
  
  }
 unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
        <Switch>
  
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component=  {SignInAndOut}/>
        
        </Switch>
        
        
      </div>
    );
   
  }
  
}

export default App;
