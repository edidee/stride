import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Mono from 'vue-mono'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvZai0qUeg0E62ayXHd7fC-iGouDXsGGw",
  authDomain: "stride-6835e.firebaseapp.com",
  projectId: "stride-6835e",
  storageBucket: "stride-6835e.appspot.com",
  messagingSenderId: "237082190332",
  appId: "1:237082190332:web:8999831593d8a485c35279",
  measurementId: "G-Z8908SFYCP"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App).use(router).use(store).use(Mono, { publicKey: 'test_pk_IubxmMzyXJUsrbuPiqm5' }).mount('#app')
