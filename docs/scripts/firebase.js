const firebaseConfig = {
  apiKey: "AIzaSyCEg7nrbEdgYWYPLzZvMyygAUoGnH82usk",
  authDomain: "app1-723bd.firebaseapp.com",
  projectId: "app1-723bd",
  storageBucket: "app1-723bd.appspot.com",
  messagingSenderId: "854378895091",
  appId: "1:854378895091:web:69024710dfb90306da0986",
  measurementId: "G-ES2EW7NQZE"
};

  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  var db = firebase.firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login").style.display = "none";
      document.getElementById("master_container").style.display = "flex";

      var userEmail = user.email;
      document.cookie = "mail=" + userEmail + ";";
  
      var uid = user.uid;
      document.cookie = "uid=" + uid + ";";
  
    } else {
      document.getElementById("login").style.display = "flex";
      document.getElementById("master_container").style.display = "none";
    }
  });
  })
  .catch(function(error) {
  console.log(error);
  });
  


   


  function login() {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("master_container").style.display = "flex";

        var userEmail = user.email;
        document.cookie = "mail=" + userEmail + ";";

      var uid = user.uid;
      document.cookie = "uid=" + uid + ";";

      })
    
      .catch(function(error) {
        var errorMessage = error.message;
        if (errorMessage.includes("password")) {
          alert("Password errata");
        } else {
          alert("Errore di accesso: " + errorMessage);
        }
      });
    }
