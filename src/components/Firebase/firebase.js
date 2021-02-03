import app from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDJY40GCyRlTQNinE5hn4v5QCYjEr8PRBY",
    authDomain: "viet-sample-firebase.firebaseapp.com",
    projectId: "viet-sample-firebase",
    storageBucket: "viet-sample-firebase.appspot.com",
    messagingSenderId: "526243670058",
    appId: "1:526243670058:web:1e58cbcf981fe15bbdfb53",
    measurementId: "G-JC3M0YHQXY"
  };
  
  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)    

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password)    

    doSignOut = ()=> this.auth.signOut();

    doPasswordRest = (email)=> this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password)=> this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;
  
