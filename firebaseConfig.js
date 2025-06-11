// Firebase configuration for Rune Bearer game
const firebaseConfig = {
    apiKey: "AIzaSyAXi4Ww3ngqKFIcYamOXlN8Oac38z2GTRg",
    authDomain: "rune-bearers.firebaseapp.com",
    databaseURL: "https://rune-bearers-default-rtdb.firebaseio.com",
    projectId: "rune-bearers",
    storageBucket: "rune-bearers.firebasestorage.app",
    messagingSenderId: "725335491501",
    appId: "1:725335491501:web:26f3bffc0d06552bcb5724"
  };
  
  // Initialize Firebase (using compat version for easier integration)
  firebase.initializeApp(firebaseConfig);
  
  // Get references to Firebase services
  const auth = firebase.auth();
  const database = firebase.database();
  
  // Export for use in other files
  window.firebaseAuth = auth;
  window.firebaseDB = database;
  
  console.log('Firebase initialized successfully for Rune Bearer game');