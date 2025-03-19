let lastVisible = null;
let allRepairs = [];
let limit = 10;

function setGetRepairsQueryLimit(){
    lastVisible = null;
    allRepairs = [];

    const repairQueryLimitInput = document.getElementById('repair_query_limit_input');
    if(repairQueryLimitInput.value != ''){
      limit = Number(repairQueryLimitInput.value);
    }else{
      limit = 10;
    }

    getRepairsDef();
}

function getRepairsDef() {
    const noDataAvailable = document.getElementById('no-data-available');

    const fetchOrderSelector = document.getElementById('fetch-order-selector');
    const statusSelector = document.getElementById('fetch-status-selector');


    let query = firebase
    .firestore()
    .collection('repairs')
    .orderBy('timestamp', fetchOrderSelector.value)
    .limit(limit);

    // Applica il filtro solo se necessario
    if (globalThis.repairType !== 'TUTTE') {
        query = query.where('repair_type', '==', globalThis.repairType);
    }

    if(statusSelector.value !== 'TUTTI'){
        query = query.where('status', '==', statusSelector.value)
    }

    // Usa startAfter se lastVisible è definito
    if (typeof lastVisible !== 'undefined' && lastVisible) {
        query = query.startAfter(lastVisible);
    }

    query.get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                noDataAvailable.style.display = 'flex';
                var table = document.getElementById('tutteLeRiparazioniTableBody');
                table.innerHTML = '';
                
                console.log("Nessun altro dato trovato.");
                return;
            }

            noDataAvailable.style.display = 'none';

            // Aggiorna lastVisible per paginazione
            lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

            querySnapshot.forEach((doc) => {
                const data = { ...doc.data(), id: doc.id }; // Clona per sicurezza
                // console.log(data); // Controlla il formato PRIMA di passarlo a una funzione
                allRepairs.push(data);
            });
            createTableRows(allRepairs, 'tutteLeRiparazioniTableBody');

            // console.log("Tutti i dati finora:", allRepairs);
        })
        .catch((error) => {
            console.log('Errore durante il recupero delle riparazioni: ' + error.message);
            alert('Errore durante il recupero delle riparazioni: ' + error.message);
        });
}


function refreshFiltersInTable(){
    var table = document.getElementById('tutteLeRiparazioniTableBody');
    table.innerHTML = '';

    lastVisible = null;
    allRepairs = [];
    getRepairsDef();
}


function createTableRows(dataArray, tableId) {
    var table = document.getElementById(tableId);
    table.innerHTML = '';

    dataArray.forEach(data => {
        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        /*
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        */
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell2.className = 'data-cell';

        var parts = data.start.split("-");
        var startConverted = parts[2] + "-" + parts[1] + "-" + parts[0];

        cell1.innerHTML = startConverted;
        cell2.innerHTML = data.customer_name;
        cell3.innerHTML = data.type + ' ' + data.brand + ' ' + data.model;
        /* 
        cell4.innerHTML = ;
        */
        cell5.innerHTML = data.repair_type;
        cell6.innerHTML = data.status;
        cell7.innerHTML = data.serial_number;

        cell0.style.display = 'flex';
        cell0.style.flexDirection = 'row';

        // Pulsante Edit
        var editButton = document.createElement("button");
        editButton.className = "task_actions_button1";
        editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
        editButton.onclick = function () {
            getRepairDataToFill(data);
        };
        cell0.appendChild(editButton);

        // Pulsante Delete
        var deleteButton = document.createElement("button");
        deleteButton.className = "task_actions_button1";
        deleteButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
        deleteButton.onclick = function () {
            deleteRepair(data);
        };
        cell0.appendChild(deleteButton);

        // Pulsante Description
        var descriptionButton = document.createElement("button");
        descriptionButton.className = "task_actions_button1";
        descriptionButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
        descriptionButton.onclick = () => {
            globalThis.currentRepair = data;
            showSchedaDiRiparazione(data);
        };
        cell0.appendChild(descriptionButton);
    });
}





function createTableRow(data, table) {

    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);

    cell2.className = 'data-cell';

    var parts = data.start.split("-");
    var startConverted = parts[2] + "-" + parts[1] + "-" + parts[0];

    cell1.innerHTML = startConverted;
    cell2.innerHTML = data.customer_name;
    cell3.innerHTML = data.type;
    cell4.innerHTML = data.brand;
    cell5.innerHTML = data.model;
    cell6.innerHTML = data.status;
    cell7.innerHTML = data.serial_number;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';

    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function () {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function () {
        deleteRepair(data);
    };
    cell15.appendChild(editButton);


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>description</i>";
    editButton.onclick = function () {
        showSchedaDiRiparazione(data);
    };
    cell15.appendChild(editButton);
}

