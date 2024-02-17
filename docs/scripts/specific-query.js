
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }

  
function getALLRepairsBySerialNumber() {
  var table = document.getElementById("tutteLeRiparazioniTableBody");
  const myCollection = db.collection('repairs');
  const companyName = document.getElementById('repair_search20').value.toLowerCase();
table.innerHTML = '';

  myCollection.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const data = doc.data();
      const companyNameInDoc = data.serial_number.toLowerCase();
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }

    
  function getALLRepairsBySerialNumber2() {
    var table = document.getElementById("riparazioniInterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'INTERNA');
    const companyName = document.getElementById('repair_search21').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.serial_number.toLowerCase();
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }


  function getALLRepairsBySerialNumber3() {
    var table = document.getElementById("riparazioniEsterneTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'ESTERNA');
    const companyName = document.getElementById('repair_search22').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.serial_number.toLowerCase();
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
      });
    }).catch((error) => {
      console.error('Errore nella query per recuperare una specifica azienda:', error);
    });
  }

  function getALLRepairsBySerialNumber4() {
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const myCollection = db.collection('repairs').where('repair_type', '==', 'GARANZIA');
    const companyName = document.getElementById('repair_search23').value.toLowerCase();
  table.innerHTML = '';

    myCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const companyNameInDoc = data.serial_number.toLowerCase();
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



  function getAllRepairs2(orderByTimestamp = 'asc') {
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs');

    let query = userTasksRef.orderBy('timestamp', orderByTimestamp);

    query.get()
        .then((querySnapshot) => {
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                createTableRow(data, 'tutteLeRiparazioniTableBody');
            });
        })
        .catch((error) => {
            console.log('Errore durante il recupero di tutte le riparazioni: ', error);
        });
}

function getInternalRepairsTimestamp(orderByTimestamp = 'asc') {
  var table = document.getElementById("riparazioniInterneTableBody");
  table.innerHTML = "";
  const db = firebase.firestore();
  const userTasksRef = db.collection('repairs');

  let query = userTasksRef.where('repair_type', '==', 'INTERNA').orderBy('timestamp', orderByTimestamp);

  query.get()
      .then((querySnapshot) => {
          while (table.firstChild) {
              table.removeChild(table.firstChild);
          }
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data, 'riparazioniInterneTableBody');
          });
      })
      .catch((error) => {
          console.log('Errore durante il recupero di tutte le riparazioni: ', error);
      });
}


function getEsternalRepairsTimestamp(orderByTimestamp = 'asc') {
  var table = document.getElementById("riparazioniEsterneTableBody");
  table.innerHTML = "";
  const db = firebase.firestore();
  const userTasksRef = db.collection('repairs');

  let query = userTasksRef.where('repair_type', '==', 'ESTERNA').orderBy('timestamp', orderByTimestamp);

  query.get()
      .then((querySnapshot) => {
          while (table.firstChild) {
              table.removeChild(table.firstChild);
          }
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data, 'riparazioniEsterneTableBody');
          });
      })
      .catch((error) => {
          console.log('Errore durante il recupero di tutte le riparazioni: ', error);
      });
}

function getWarrantyRepairsTimestamp(orderByTimestamp = 'asc') {
  var table = document.getElementById("riparazioniInGaranziaTableBody");
  table.innerHTML = "";
  const db = firebase.firestore();
  const userTasksRef = db.collection('repairs');

  let query = userTasksRef.where('repair_type', '==', 'GARANZIA').orderBy('timestamp', orderByTimestamp);

  query.get()
      .then((querySnapshot) => {
          while (table.firstChild) {
              table.removeChild(table.firstChild);
          }
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data, 'riparazioniInGaranziaTableBody');
          });
      })
      .catch((error) => {
          console.log('Errore durante il recupero di tutte le riparazioni: ', error);
      });
}

function createTableRow(data, tableBodyId) {
  var tableBody = document.getElementById(tableBodyId);
  var row = tableBody.insertRow();
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

    cell15.style.display = 'flex';
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


function changeOrder() {
    var selectElement = document.getElementById("orderSelect");
    var selectedOrder = selectElement.value;
    getAllRepairs2(selectedOrder);
}

function changeOrder3() {
  var selectElement = document.getElementById("orderSelect3");
  var selectedOrder = selectElement.value;
  getInternalRepairsTimestamp(selectedOrder);
}

function changeOrder4() {
  var selectElement = document.getElementById("orderSelect4");
  var selectedOrder = selectElement.value;
  getEsternalRepairsTimestamp(selectedOrder);
}

function changeOrder5() {
  var selectElement = document.getElementById("orderSelect5");
  var selectedOrder = selectElement.value;
  getWarrantyRepairsTimestamp(selectedOrder);
}






