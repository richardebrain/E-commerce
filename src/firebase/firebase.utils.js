import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

 //the config will include the key from my firebase project from the web
const config = {
    
    apiKey: "AIzaSyDxvTryIU97g7TDvOWII5NIDcSFEbvcrvg",
    authDomain: "e-commerce-c1d16.firebaseapp.com",
    projectId: "e-commerce-c1d16",
    storageBucket: "e-commerce-c1d16.appspot.com",
    messagingSenderId: "658894680694",
    appId: "1:658894680694:web:66f7bbec1579c19129e557",
    measurementId: "G-WEXP7YE30C"
  };

   export const createUserProfile = async (userAuth,additionalData) =>{
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      
        if(!snapShot.exist){
          const{displayName,email}= userAuth;
          const createdAt = new Date();

          try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
          })
          
        } catch (error) {
          console.log('error created user',error.message)
        }
      }
      return userRef;
    

    }


firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;