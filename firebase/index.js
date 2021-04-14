import firebase from 'firebase';
import { firebaseConfig } from './config';

if(firebase.apps.length===0) firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.database();
