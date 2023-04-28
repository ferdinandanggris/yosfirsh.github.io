// Inisialisasi Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDMNh9z9Sbg_rePdpCd4AqgmhbwXaCzwA8",
    authDomain: "sistem-monitoring-parkir.firebaseapp.com",
    databaseURL: "https://sistem-monitoring-parkir-default-rtdb.firebaseio.com",
    projectId: "sistem-monitoring-parkir",
    storageBucket: "sistem-monitoring-parkir.appspot.com",
    messagingSenderId: "626204016367",
    appId: "1:626204016367:web:c358f15b16d99be55e251a",
    measurementId: "G-K2X0S3X1NW"
};

// Inisialisasi App Firebase
firebase.initializeApp(firebaseConfig);

// Referensi database Firebase
var dbRef = firebase.database().ref("/");

// Mendengarkan perubahan pada database Firebase
dbRef.on("value", function(snapshot) {
    // Mendapatkan data parkir dari database Firebase
    var parkirData = snapshot.val();

    console.log(parkirData); // tampilkan nilai dari parkirData di console

    // Mengupdate warna kotak-kotak sesuai data parkir
    if (parkirData.parkir_1 === 1) {
      document.getElementById("parkir_1").style.backgroundColor = "green";
    } else {
      document.getElementById("parkir_1").style.backgroundColor = "red";
    }
  
    if (parkirData.parkir_2 === 1) {
      document.getElementById("parkir_2").style.backgroundColor = "green";
    } else {
      document.getElementById("parkir_2").style.backgroundColor = "red";
    }
  
    if (parkirData.parkir_3 === 1) {
      document.getElementById("parkir_3").style.backgroundColor = "green";
    } else {
      document.getElementById("parkir_3").style.backgroundColor = "red";
    }
  
    if (parkirData.parkir_4 === 1) {
      document.getElementById("parkir_4").style.backgroundColor = "green";
    } else {
      document.getElementById("parkir_4").style.backgroundColor = "red";
    }
  
    if (parkirData.parkir_5 === 1) {
      document.getElementById("parkir_5").style.backgroundColor = "green";
    } else {
      document.getElementById("parkir_5").style.backgroundColor = "red";
    }
});
