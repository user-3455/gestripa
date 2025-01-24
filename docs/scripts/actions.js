function aggiungiRiparazione() {
  if (document.getElementById('start1').value !== '') {

    var status = document.getElementById('status1');
    var type = document.getElementById('type1');
    var brand = document.getElementById('brand1');
    var model = document.getElementById('model1');
    var serial_number = document.getElementById('serial_number1');
    var accessories = document.getElementById('accessories1');
    var reported_defect = document.getElementById('reported_defect1');
    var customer_name = document.getElementById('customer_name1');
    var customer_phone = document.getElementById('customer_phone1');

    const endValue = document.getElementById('end1').value;
    const end = endValue.trim() === '' ? ' ' : endValue;


    const path = firebase.firestore().collection('repairs').doc();

    const data = {
      repair_type: document.getElementById('repair_type1').value,
      start: document.getElementById('start1').value,
      end: end,
      status: document.getElementById('status1').value,
      type: document.getElementById('type1').value,
      brand: document.getElementById('brand1').value,
      model: document.getElementById('model1').value,
      serial_number: document.getElementById('serial_number1').value,
      accessories: document.getElementById('accessories1').value,
      reported_defect: document.getElementById('reported_defect1').value,
      customer_name: document.getElementById('customer_name1').value,
      customer_phone: document.getElementById('customer_phone1').value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    path.set(data)
      .then(() => {
        const newDocId = path.id;
        return path.update({ id: newDocId });
      })
      .then(() => {
        notificate("Riparazione aggiunta con successo", 'normal');
        status.value = '';
        type.value = '';
        brand.value = '';
        model.value = '';
        serial_number.value = '';
        accessories.value = '';
        reported_defect.value = '';
        customer_name.value = '';
        customer_phone.value = '';
        updateLastSerialNumber();
      })
      .catch((error) => {
        notificate("Errore durante l'aggiunta della riparazione: " + error, 'error');
      });
  } else {
    notificate('Si prega di inserire una data di ingresso valida', 'error');
  }
}

function updateLastSerialNumber() {
  const docRef = firebase.firestore().collection("sys").doc("counters");

  docRef.get()
    .then((doc) => {
      if (doc.exists) {
        const lastSerialNumber = Number(doc.data()['last_serial_number'] || 0); // Valore di default se non esiste
        const dataToUpdate = { last_serial_number: lastSerialNumber + 1 };

        return docRef.set(dataToUpdate, { merge: true });
      } else {
        alert('Nessun ultimo numero di serie trovato');
        return Promise.reject('Documento non trovato');
      }
    })
    .then(() => {
      console.log("Documento aggiornato con successo!");
    })
    .catch((error) => {
      console.error("Errore durante l'aggiornamento del documento:", error);
    });
}



function saveElementChanges1() {
  var docRef = firebase.firestore().collection("repairs").doc(globalThis.currentRepair.id).collection('products').doc(globalThis.currentRepairElement.id);

  docRef.update({
    quantity: document.getElementById('change-input1').value,
    product: document.getElementById('change-input2').value,
    product_description: document.getElementById('change-input3').value,
    product_price: document.getElementById('change-input4').value,
  })
    .then(function () {
      getRepairProducts();
      document.getElementById('change-element1').style.display = 'none';
      alert("Elemento aggiornato con successo!");
    })
    .catch(function (error) {
      console.error("Errore nell'aggiornamento dell'elemento: ", error);
    });
}



function deleteRepair(data) {
  var conferma = confirm("Sei sicuro di voler eliminare la riparazione?");
  if (conferma) {
    const docRef = firebase.firestore().collection('repairs').doc(data.id);

    docRef.delete()
      .then(() => {
        notificate('Riparazione eliminata con successo', 'normal');
        refreshFiltersInTable();
      })
      .catch((error) => {
        notificate("Errore durante l'eliminazione della riparazione:" + error, 'error');
      });
  }
}

function deleteRepairProduct(data) {
  var conferma = confirm("Sei sicuro di voler eliminare questo elemento?");
  if (conferma) {
    const docRef = firebase.firestore().collection('repairs').doc(globalThis.currentRepair.id).collection('products').doc(data.id);

    docRef.delete()
      .then(() => {
        notificate('Prodotto eliminato con successo', 'normal');
        getRepairProducts();
      })
      .catch((error) => {
        notificate("Errore durante l'eliminazione del prodotto:" + error, 'error');
      });
  }
}


function getRepairDataToFill(data) {
  globalThis.currentRepair = data;
  showChangeRepair();

  var start = document.getElementById('start2');
  var end = document.getElementById('end2');
  var status = document.getElementById('status2');
  var type = document.getElementById('type2');
  var brand = document.getElementById('brand2');
  var model = document.getElementById('model2');
  var serial_number = document.getElementById('serial_number2');
  var accessories = document.getElementById('accessories2');
  var status_description = document.getElementById('status_description2');
  var reported_defect = document.getElementById('reported_defect2');
  var customer_name = document.getElementById('customer_name2');
  var customer_phone = document.getElementById('customer_phone2');


  type.value = data.type;
  brand.value = data.brand;
  model.value = data.model;
  serial_number.value = data.serial_number;
  accessories.value = data.accessories;
  status_description.value = data.status_description;
  reported_defect.value = data.reported_defect;
  customer_name.value = data.customer_name;
  customer_phone.value = data.customer_phone;


  var menu2 = document.getElementById("status2");
  for (var i = 0; i < menu2.options.length; i++) {
    if (menu2.options[i].value === data.status) {
      menu2.selectedIndex = i;
      break;
    }
  }

  var menu3 = document.getElementById("repair_type2");
  for (var i = 0; i < menu3.options.length; i++) {
    if (menu3.options[i].value === data.repair_type) {
      menu3.selectedIndex = i;
      break;
    }
  }

  var endDateInput = data.end;
  var inputDate1 = document.getElementById('end2');
  inputDate1.value = endDateInput;

  var startDateInput = data.start;
  var inputDate2 = document.getElementById('start2');
  inputDate2.value = startDateInput;


  document.getElementById('start2').value = data.start;
  document.getElementById('end2').value = data.end;
}



function changeRepair() {
  const path = firebase.firestore().collection('repairs').doc(globalThis.currentRepair.id);

  const data = {
    repair_type: document.getElementById('repair_type2').value,
    start: document.getElementById('start2').value,
    end: document.getElementById('end2').value,
    status: document.getElementById('status2').value,
    type: document.getElementById('type2').value,
    brand: document.getElementById('brand2').value,
    model: document.getElementById('model2').value,
    serial_number: document.getElementById('serial_number2').value,
    accessories: document.getElementById('accessories2').value,
    status_description: document.getElementById('status_description2').value,
    reported_defect: document.getElementById('reported_defect2').value,
    customer_name: document.getElementById('customer_name2').value,
    customer_phone: document.getElementById('customer_phone2').value,
  };



  path.update(data)
    .then(() => {
      notificate("Riparazione modificata con successo", 'normal');
      showRepairs('TUTTE');
    })
    .catch((error) => {
      notificate("Errore durante la modifica della riparazione: " + error, 'error');
    });
}



function aggiungiCelle() {
  if (document.getElementById('input1').value !== '') {
    if (document.getElementById('input2').value !== '') {
      if (document.getElementById('input3').value !== '') {
        if (document.getElementById('input4').value !== '') {

          var quantity = document.getElementById('input1');
          var product = document.getElementById('input2');
          var product_description = document.getElementById('input3');
          var product_price = document.getElementById('input4');

          const path = firebase.firestore().collection('repairs').doc(globalThis.currentRepair.id).collection('products').doc();

          const data = {
            quantity: document.getElementById('input1').value,
            product: document.getElementById('input2').value,
            product_description: document.getElementById('input3').value,
            product_price: document.getElementById('input4').value,
          };

          path.set(data)
            .then(() => {
              const newDocId = path.id;
              return path.update({ id: newDocId });
            })
            .then(() => {
              notificate("Articolo aggiunto con successo", 'normal');
              quantity.value = '';
              product.value = '';
              product_description.value = '';
              product_price.value = '';
              getRepairProducts();
            })
            .catch((error) => {
              notificate("Errore durante l'aggiunta dell' articolo: " + error, 'error');
            });
        } else {
          notificate('Si prega di inserire una prezzo valido', 'error');
        }
      } else {
        notificate('Si prega di inserire una descrizione valida', 'error');
      }
    } else {
      notificate('Si prega di inserire un articolo valido', 'error');
    }
  } else {
    notificate('Si prega di inserire una quantità valida', 'error');
  }
}


function aggiungiDatiAlPdf() {
  var manodopera = document.getElementById('input5');
  var data_avviso = document.getElementById('input6');
  var status = document.getElementById('input7');
  var ritiro = document.getElementById('inputRITIRO1');

  const path = firebase.firestore().collection('repairs').doc(globalThis.currentRepair.id);

  const dataToUpdate = {};

  if (manodopera.value !== '') {
    dataToUpdate.manodopera = manodopera.value;
  }

  if (data_avviso.value !== '') {
    dataToUpdate.data_avviso = data_avviso.value;
  }

  if (status.value !== '') {
    dataToUpdate.status = status.value;
  }

  if (ritiro.value !== '') {
    dataToUpdate.end = ritiro.value;
  }

  // Controlla se ci sono dati da aggiornare
  if (Object.keys(dataToUpdate).length === 0) {
    // Non ci sono dati da aggiornare, esci dalla funzione o gestisci di conseguenza
    console.log('Nessun dato da aggiornare.');
    return;
  }

  path.update(dataToUpdate)
    .then(() => {
      const newDocId = path.id;
      return path.update({ id: newDocId });
    })
    .then(() => {
      const totalPrice = globalThis.totalPrice;
      if (document.getElementById('input5').value !== '') {
        document.getElementById('total_pdf1').innerText = 'TOTALE RICAMBI: ' + totalPrice + ' EURO';
        document.getElementById('hand_price_pdf1').innerText = 'MANODOPERA: ' + manodopera.value + ' EURO';
        var result1 = parseFloat(manodopera.value) + (parseFloat(totalPrice));
        document.getElementById('total_total_price_pdf1').innerText = 'TOTALE + IVA: ' + result1 + ' EURO';
      }
      if (document.getElementById('input6').value !== '') {
        var parts1 = data_avviso.value.split("-");
        var converted = parts1[2] + "-" + parts1[1] + "-" + parts1[0];
        document.getElementById('data_avviso_pdf1').innerText = 'DATA AVVISO: ' + converted;
      }
      if (document.getElementById('input7').value !== '') {
        document.getElementById('in_repair_veichle_status_pdf1').innerText = 'STATO VEICOLO: ' + status.value;
      }
      if (document.getElementById('inputRITIRO1').value !== '') {
        var parts2 = ritiro.value.split("-");
        var converted2 = parts2[2] + "-" + parts2[1] + "-" + parts2[0];
        document.getElementById('end_pdf1').innerText = 'DATA RITIRO: ' + converted2;
      }


    })
    .then(() => {
      notificate("Dati aggiunti con successo al pdf", 'normal');
      manodopera.value = '';
      data_avviso.value = '';
      status.value = '';
    })
    .catch((error) => {
      notificate("Errore durante l'aggiunta dei dati al pdf: " + error, 'error');
    });
}
