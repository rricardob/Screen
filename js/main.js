$(document).ready(function () {
  Init();
  loadData();
  $(".fixed-table-loading").css("display", "none"), update();
  setInterval(update, 1000);
});

function update() {
  let date = null;
  //$("#clock").fitText(1.3);
  moment.locale("es");
  date = moment(new Date());
  $("#clock").html(date.format("hh:mm:ss A"));
}

function loadData() {
  let mydata = [
    {
      fechahora: "05/02/2021 15:38",
      arribo: "test0",
      embarcacion: "Adolfito I",
      servicios: "atraco",
      empresa: "TASA",
    },
    {
      fechahora: "05/02/2021 15:38",
      arribo: "test0",
      embarcacion: "Adolfito II",
      servicios: "atraco",
      empresa: "TASA",
    },
    {
      fechahora: "05/02/2021 15:38",
      arribo: "test0",
      embarcacion: "Adolfito II",
      servicios: "atraco",
      empresa: "TASA",
    },
    {
      fechahora: "05/02/2021 15:38",
      arribo: "test0",
      embarcacion: "Adolfito II",
      servicios: "atraco",
      empresa: "TASA",
    },
    {
      fechahora: "05/02/2021 15:38",
      arribo: "test0",
      embarcacion: "Adolfito II",
      servicios: "atraco",
      empresa: "TASA",
    },
  ];

  /*$('#table').bootstrapTable({
				data: mydata
		});*/
}

function Init() {
  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  var firebaseConfig = {
    apiKey: "AIzaSyByk0tLLxtd36y1ZGkZmxREMGsu13K81LU",
    authDomain: "osf-ropi.firebaseapp.com",
    projectId: "osf-ropi",
    storageBucket: "osf-ropi.appspot.com",
    messagingSenderId: "303218501310",
    appId: "1:303218501310:web:63dc2d78d78be0df6e60ef",
    measurementId: "G-8XNG3EYRBJ",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  let row = "";
  let size= 0;
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      console.info("Signed in..");
      db = firebase.firestore();
      /*db.collection("OperacionesMuelle")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((monitor) => {
            row +=
              "<tr>" +
              "<td>" +
              monitor.data().fechaRegistro +
              "</td>" +
              "<td>" +
              monitor.data().nombreEmbarcacion +
              "</td>" +
              "<td>Atraco</td>" +
              "<td>2</td>" +
              "<td>" +
              monitor.data().estado +
              "</td>" +
              "<td>" +
              monitor.data().razonSocial +
              "</td>" +
              "</tr>";

            //console.log(monitor.data().nombreEmbarcacion);
          });
          console.log("snapshot " + row);
          document.getElementById("table-body").innerHTML = row;
        });*/

      db.collection("OperacionesMuelle")
        .where("estado", "!=", "Terminado")
        .onSnapshot(function (querySnapshot) {
          //var cities = [];
		  row = "";
		  //size = 0;
		  document.getElementById("table-body").innerHTML = "";
          querySnapshot.forEach(function (doc) {
            //cities.push(doc.data().name);
            row +=
              "<tr>" +
              "<td>" +
              doc.data().fechaRegistro +
              "</td>" +
              "<td>" +
              doc.data().nombreEmbarcacion +
              "</td>" +
              "<td>Atraco</td>" +
              "<td>2</td>" +
              "<td>" +
              doc.data().estado +
              "</td>" +
              "<td>" +
              doc.data().razonSocial +
              "</td>" +
              "</tr>";
            console.log(doc.data());
			size++;
          });
		  $("#totalBarcos").text("Total de Barcos: "+querySnapshot.docs.length);
          //console.log("Current cities in CA: ", cities.join(", "));		  
		  document.getElementById("table-body").innerHTML = row;
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("error " + errorCode + " " + errorMessage);
    });
}
