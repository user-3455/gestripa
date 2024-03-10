function getAllRepairs(){
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs');
  
    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero di tutte le riparazioni: ', error);
      });
  
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
  
  function createTableRow(data) {
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
  
    cell1.innerHTML = data.start; 
    cell2.innerHTML = data.status;
    cell3.innerHTML = data.customer_name;
    cell4.innerHTML = data.type;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.model;
    cell7.innerHTML = data.serial_number;

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

  
  function getInternalRepairs(){
    var table = document.getElementById("riparazioniInterneTableBody");
    const db = firebase.firestore();
  
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'INTERNA');

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni interne: ', error);
      });
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
        cell7.innerHTML = data.serial_number;
    
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


  function getEsternalRepairs(){
    var table = document.getElementById("riparazioniEsterneTableBody");
    const db = firebase.firestore();
  
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'ESTERNA');

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni esterne: ', error);
      });
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
        cell7.innerHTML = data.serial_number;
    
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

  function getWarrantyRepairs(){
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const db = firebase.firestore();
  
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'GARANZIA');

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni interne: ', error);
      });
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
        cell7.innerHTML = data.serial_number;
        
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



  function getRepairProducts(){
    var table = document.getElementById("pdf_table1");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs').doc(globalThis.currentRepair.id).collection('products');
  
    let totalPriceSum = 0; 

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);

          if (data.product_price) {
            totalPriceSum += parseFloat(data.product_price);
          }
        });
        displayTotalPrice(totalPriceSum);
      })
      .catch((error) => {
        alert('Errore durante il recupero di tutti i prodotti aggiunti alla riparazione: ', error);
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

    cell3.className = 'data-cell';
  
    cell1.innerHTML = data.quantity; 
    cell2.innerHTML = data.product; 
    cell3.innerHTML = data.product_description;
    cell4.innerHTML = data.product_price;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'row';

  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      fillElementEditInterface(data);
    };
    cell15.appendChild(editButton);

    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepairProduct(data);
    };
    cell15.appendChild(editButton);
}


  }

  function displayTotalPrice(totalPrice) {

    const db = firebase.firestore();
    const repairDocRef = db.collection('repairs').doc(globalThis.currentRepair.id);
    repairDocRef.get()
        .then((doc) => {
            if (doc.exists) {
              globalThis.currentRepair = doc.data();
            } else {
                alert('Impossibile mostrare correttamente i dati nel pdf');
            }
        })
        .catch((error) => {
          alert('Impossibile mostrare correttamente i dati nel pdf' + error);
        });
    
       document.getElementById('total_pdf1').innerText = 'TOTALE RICAMBI: ' + totalPrice + ' EURO';
       document.getElementById('hand_price_pdf1').innerText = 'MANODOPERA: ' + globalThis.currentRepair.manodopera + ' EURO';
       var result1 = parseFloat(globalThis.currentRepair.manodopera) + (parseFloat(totalPrice));
       document.getElementById('total_total_price_pdf1').innerText = 'TOTALE +IVA: ' + result1 + ' EURO';
       document.getElementById('data_avviso_pdf1').innerText = 'DATA AVVISO: ' + globalThis.currentRepair.data_avviso;
       document.getElementById('in_repair_veichle_status_pdf1').innerText = 'STATO VEICOLO: ' + globalThis.currentRepair.status;

       globalThis.totalPrice = totalPrice;
    }

  function addPdfDetails(){
const db = firebase.firestore();
const repairDocRef = db.collection('repairs').doc(globalThis.currentRepair.id);

// Dati da aggiungere o aggiornare nel documento
const nuoviDati = {
    manodopera: document.getElementById('input5').value,
    data_avviso: document.getElementById('input6').value,
    repair_status: document.getElementById('input7').value,
};

// Aggiungi o aggiorna i dati nel documento
// Nota: Il metodo set sovrascrive completamente il documento, mentre il metodo update aggiunge o aggiorna solo i campi specificati.
repairDocRef.update(nuoviDati, { merge: true })
    .then(() => {
      notificate("Dati aggiunti con successo" , 'normal');
    })
    .catch((error) => {
      notificate("Errore durante la modifica " + error, 'error');
    });

  }


  
    function getAllRepairsDesc(){
      //più recente
      var table = document.getElementById("tutteLeRiparazioniTableBody");
      const db = firebase.firestore();
      const userTasksRef = db.collection('repairs');
    
      userTasksRef.orderBy('start', 'desc').get() // Ordina i documenti per data decrescente
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            createTableRow(data);
          });
        })
        .catch((error) => {
          alert('Errore durante il recupero di tutte le riparazioni: ' + error);
        });
    
      // Rimuovi tutte le righe dalla tabella
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
      cell7.innerHTML = data.serial_number;

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
    

  
  function getAllRepairsAsc(){
    //più lontana
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs');

    userTasksRef.orderBy('start', 'asc').get() // Ordina i documenti per data in ordine crescente
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                createTableRow(data);
            });
        })
        .catch((error) => {
            alert('Errore durante il recupero di tutte le riparazioni: ', error);
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
    cell7.innerHTML = data.serial_number;

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



function getInternalRepairsDesc(){
  var table = document.getElementById("riparazioniInterneTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs')
                         .where('repair_type', '==', 'INTERNA')
                         .orderBy('start', 'desc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
          alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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
      cell7.innerHTML = data.serial_number;
  
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


function getInternalRepairsAsc(){
  var table = document.getElementById("riparazioniInterneTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs')
                         .where('repair_type', '==', 'INTERNA')
                         .orderBy('start', 'asc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
          alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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
      cell7.innerHTML = data.serial_number;
  
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



function getEsternalRepairsDesc(){
  var table = document.getElementById("riparazioniEsterneTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs')
                         .where('repair_type', '==', 'ESTERNA')
                         .orderBy('start', 'desc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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
      cell7.innerHTML = data.serial_number;
  
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


function getEsternalRepairsAsc(){
  var table = document.getElementById("riparazioniEsterneTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs')
                         .where('repair_type', '==', 'ESTERNA')
                         .orderBy('start', 'asc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
          alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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
  
      cell2.className = 'data-cell';
    
      cell1.innerHTML = data.start; 
      cell2.innerHTML = data.status;
      cell3.innerHTML = data.customer_name;
      cell4.innerHTML = data.type;
      cell5.innerHTML = data.brand;
      cell6.innerHTML = data.model;
      cell7.innerHTML = data.serial_number;
  
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



function getWarrantyRepairsAsc(){
  var table = document.getElementById("riparazioniInGaranziaTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs')
                         .where('repair_type', '==', 'GARANZIA')
                         .orderBy('start', 'asc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
          alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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
  
      cell2.className = 'data-cell';
    
      cell1.innerHTML = data.start; 
      cell2.innerHTML = data.status;
      cell3.innerHTML = data.customer_name;
      cell4.innerHTML = data.type;
      cell5.innerHTML = data.brand;
      cell6.innerHTML = data.model;
      cell7.innerHTML = data.serial_number;

  
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


function getWarrantyRepairsDesc(){
  var table = document.getElementById("riparazioniInGaranziaTableBody");
  const db = firebase.firestore();
  table.innerHTML = '';

  const userTasksRef = db.collection('repairs').where('repair_type', '==', 'GARANZIA').orderBy('start', 'desc'); // Ordina per data di inizio in ordine decrescente
                        

  userTasksRef.get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              createTableRow(data);
          });
      })
      .catch((error) => {
          alert('Errore durante il recupero delle riparazioni interne: ' + error); // Aggiunto il messaggio di errore
      });

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

  
      cell2.className = 'data-cell';
    
      cell1.innerHTML = data.start; 
      cell2.innerHTML = data.status;
      cell3.innerHTML = data.customer_name;
      cell4.innerHTML = data.type;
      cell5.innerHTML = data.brand;
      cell6.innerHTML = data.model;
      cell7.innerHTML = data.serial_number;
  
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

  

