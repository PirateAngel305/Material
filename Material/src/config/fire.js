import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDp_xmaEZ4qkY0zNYyJk8Sd50IJNQku52g",
  authDomain: "noble-hydra-236211.firebaseapp.com",
  databaseURL: "https://noble-hydra-236211.firebaseio.com",
  projectId: "noble-hydra-236211",
  storageBucket: "noble-hydra-236211.appspot.com",
  messagingSenderId: "311751384691",
  appId: "1:311751384691:web:0364a88e7bf1aae7"
};
const fire = firebase.initializeApp(config);
export default fire;
