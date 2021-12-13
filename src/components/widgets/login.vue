<template>
  <div>
    <button @click="login" class="bg-blue-400 p-4 shadow-md rounded-lg">
      Continue with Google Account.
    </button>
  </div>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvZai0qUeg0E62ayXHd7fC-iGouDXsGGw",
  authDomain: "stride-6835e.firebaseapp.com",
  projectId: "stride-6835e",
  storageBucket: "stride-6835e.appspot.com",
  messagingSenderId: "237082190332",
  appId: "1:237082190332:web:8999831593d8a485c35279",
  measurementId: "G-Z8908SFYCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();
import store from "../../store";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const db = getFirestore();
import { Mono } from "mono-node";
const monoClient = new Mono({
  secretKey: "test_sk_2leTB5EhetRgEqMt6gsO",
});

export default {
  name: "Login",
  methods: {
    login() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          retrieve();

          async function retrieve() {
            const docRef = doc(db, "users", result.user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              const bank_code = docSnap.data().bank_code;

              store.commit("setid", bank_code);
              monoClient.account.getAccountInformation(
                { accountId: bank_code },
                (err, res) => {
                  store.commit("setaccount", res.account);
                }
              );

              monoClient.account.getAccountTransactions(
                {
                  accountId: bank_code,
                  paginate: true,
                },
                (err, results) => {
                  store.commit("setstatement", results.data);
                }
              );
            } else {
              // doc.data() will be undefined in this case
              console.log("No such user!");
            }
          }

          console.log(result.user);
          store.commit("setuser", result.user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
  },
};
</script>
