function getFirstInAllRepairs(){
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    var user_selection = document.getElementById('first-in-table-selector1').value;

    const query = firebase.firestore().collection('repairs');

    var repairsInterna = [];
    var otherRepairs = [];

    query.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.status === user_selection) {
                    repairsInterna.push(data);
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
