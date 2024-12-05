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
                createTableRow(data, table);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data, table);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
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
                createTableRow(data, table);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data, table);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
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
                createTableRow(data, table);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data, table);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
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
                createTableRow(data, table);
            });

            // Inserisci le altre riparazioni
            otherRepairs.forEach((data) => {
                createTableRow(data, table);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
