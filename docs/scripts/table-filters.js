function getFirstInAllRepairs(){
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs');
    var user_selection = document.getElementById('first-in-table-selector1').value;

    var repairsInterna = []; // Array per memorizzare le riparazioni interne
    var otherRepairs = []; // Array per memorizzare le altre riparazioni

    userTasksRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.status === user_selection) {
                    repairsInterna.push(data); // Aggiungi alla lista delle riparazioni interne
                } else {
                    otherRepairs.push(data); // Aggiungi alla lista delle altre riparazioni
                }
            });

            // Inserisci prima le riparazioni interne
            repairsInterna.forEach((data) => {
                createTableRow(data);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


  function createTableRow(data, taskName) {
  
    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);

    cell2.className = 'data-cell';
  
    cell1.innerHTML = data.start; 
    cell2.innerHTML = data.status;
    cell3.innerHTML = data.customer_name;
    cell4.innerHTML = data.type;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.model;
    cell7.innerHTML = data.stato_veicolo;
    cell8.innerHTML = data.serial_number;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepair(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
    editButton.onclick = function() {
      showSchedaDiRiparazione(data);
    };
    cell15.appendChild(editButton);
    }
}



function getFirstInInternalRepairs(){
    var table = document.getElementById("riparazioniInterneTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'INTERNA');
    var user_selection = document.getElementById('first-in-table-selector2').value;

    var repairsInterna = []; // Array per memorizzare le riparazioni interne
    var otherRepairs = []; // Array per memorizzare le altre riparazioni

    userTasksRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.status === user_selection) {
                    repairsInterna.push(data); // Aggiungi alla lista delle riparazioni interne
                } else {
                    otherRepairs.push(data); // Aggiungi alla lista delle altre riparazioni
                }
            });

            // Inserisci prima le riparazioni interne
            repairsInterna.forEach((data) => {
                createTableRow(data);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


  function createTableRow(data, taskName) {
  
    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);

    cell2.className = 'data-cell';
  
    cell1.innerHTML = data.start; 
    cell2.innerHTML = data.status;
    cell3.innerHTML = data.customer_name;
    cell4.innerHTML = data.type;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.model;
    cell7.innerHTML = data.stato_veicolo;
    cell8.innerHTML = data.serial_number;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepair(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
    editButton.onclick = function() {
      showSchedaDiRiparazione(data);
    };
    cell15.appendChild(editButton);
    }
}


function getFirstInEsternalRepairs(){
    var table = document.getElementById("riparazioniEsterneTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'ESTERNA');
    var user_selection = document.getElementById('first-in-table-selector10').value;

    var repairsInterna = []; // Array per memorizzare le riparazioni interne
    var otherRepairs = []; // Array per memorizzare le altre riparazioni

    userTasksRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.status === user_selection) {
                    repairsInterna.push(data); // Aggiungi alla lista delle riparazioni interne
                } else {
                    otherRepairs.push(data); // Aggiungi alla lista delle altre riparazioni
                }
            });

            // Inserisci prima le riparazioni interne
            repairsInterna.forEach((data) => {
                createTableRow(data);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


  function createTableRow(data, taskName) {
  
    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);

    cell2.className = 'data-cell';
  
    cell1.innerHTML = data.start; 
    cell2.innerHTML = data.status;
    cell3.innerHTML = data.customer_name;
    cell4.innerHTML = data.type;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.model;
    cell7.innerHTML = data.stato_veicolo;
    cell8.innerHTML = data.serial_number;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepair(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
    editButton.onclick = function() {
      showSchedaDiRiparazione(data);
    };
    cell15.appendChild(editButton);
    }
}


function getFirstInWarrantyRepairs(){
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'GARANZIA');
    var user_selection = document.getElementById('first-in-table-selector3').value;

    var repairsInterna = []; // Array per memorizzare le riparazioni interne
    var otherRepairs = []; // Array per memorizzare le altre riparazioni

    userTasksRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.status === user_selection) {
                    repairsInterna.push(data); // Aggiungi alla lista delle riparazioni interne
                } else {
                    otherRepairs.push(data); // Aggiungi alla lista delle altre riparazioni
                }
            });

            // Inserisci prima le riparazioni interne
            repairsInterna.forEach((data) => {
                createTableRow(data);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


  function createTableRow(data, taskName) {
  
    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);

    cell2.className = 'data-cell';
  
    cell1.innerHTML = data.start; 
    cell2.innerHTML = data.status;
    cell3.innerHTML = data.customer_name;
    cell4.innerHTML = data.type;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.model;
    cell7.innerHTML = data.stato_veicolo;
    cell8.innerHTML = data.serial_number;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepair(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
    editButton.onclick = function() {
      showSchedaDiRiparazione(data);
    };
    cell15.appendChild(editButton);
    }
}
