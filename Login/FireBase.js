import firebase from 'firebase/app';
import 'firebase/auth';

const config ={

}

firebase.initializeApp(config);
export const Auth = firebase.auth();
