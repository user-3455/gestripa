
function getALLRepairsByCustomerName() {
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const myCollection = db.collection('repairs');
    const companyName = document.getElementById('repair_search1').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.customer_name.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByBrandName() {
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const myCollection = db.collection('repairs');
    const companyName = document.getElementById('repair_search2').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.model.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }

  
  function getALLRepairsByCustomerName2() {
    var table = document.getElementById("riparazioniInterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'INTERNA');
    const companyName = document.getElementById('repair_search3').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.customer_name.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByBrandName2() {
    var table = document.getElementById("riparazioniInterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'INTERNA');
    const companyName = document.getElementById('repair_search4').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.model.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByCustomerName3() {
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'GARANZIA');
    const companyName = document.getElementById('repair_search5').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.customer_name.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByBrandName3() {
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'GARANZIA');
    const companyName = document.getElementById('repair_search6').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.model.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByCustomerName4() {
    var table = document.getElementById("riparazioniEsterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'ESTERNA');
    const companyName = document.getElementById('repair_search7').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.customer_name.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsByBrandName4() {
    var table = document.getElementById("riparazioniEsterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'ESTERNA');
    const companyName = document.getElementById('repair_search8').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.model.toLowerCase();
        if (companyNameInDoc.includes(companyName)) {
          createTableRow(data); 
          
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }

