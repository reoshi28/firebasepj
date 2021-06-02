import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCGRixetrGnOJ2PmjCd0zZX6rvbbQC47gM",
      authDomain: "fir-pj-ea83b.firebaseapp.com",
      projectId: "fir-pj-ea83b",
      storageBucket: "fir-pj-ea83b.appspot.com",
      messagingSenderId: "423323855677",
      appId: "1:423323855677:web:1f708cc4c38e2eb65a7354",
      measurementId: "G-43NSTCVCKY"
    }
  )
}

export default firebase
