import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyB9CiFGgFxuHXWYpAUJc815wAA64IHTPYI",
        authDomain: "minor-fq-react.firebaseapp.com",
        databaseURL: "https://minor-fq-react.firebaseio.com",
      }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;