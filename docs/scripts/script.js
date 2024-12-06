// RESET GENERALE VARIABILI
globalThis.repairType = 'TUTTE';


function openCloseSidebar() {
  const sidebar = document.getElementById('left_bar');
  if (sidebar.style.display == 'flex') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'flex';
  }
}

function closeSidebarMobile() {
  const sidebar = document.getElementById('left_bar');
  if (innerWidth <= 999) {
    sidebar.style.display = 'none';
  }
}


function getLastSerialNumber() {
  const serialNumberInput = document.getElementById('serial_number1');

  firebase.firestore().collection("sys").doc("counters").get().then((doc) => {
    if (doc.exists) {
      serialNumberInput.value = new Date().getFullYear() + '-' + (Number(doc.data()['last_serial_number']) + 1);
      return (Number(doc.data()['last_serial_number']) + 1);
    } else {
      alert('Nessun ultimo numero di serie trovato');
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

function showCreate() {
  document.getElementById('create_new').style.display = 'flex';
  document.getElementById('change_repairs').style.display = 'none';
  document.getElementById('tutte_le_riparazioni').style.display = 'none';
  document.getElementById('scheda_di_lavorazione').style.display = 'none';
  animate1('create_new');

  getLastSerialNumber();
}

function showChangeRepair() {
  document.getElementById('create_new').style.display = 'none';
  document.getElementById('change_repairs').style.display = 'flex';
  document.getElementById('tutte_le_riparazioni').style.display = 'none';
  document.getElementById('scheda_di_lavorazione').style.display = 'none';
  animate1('change_repairs');
}

function showRepairs(type) {
  globalThis.repairType = type;

  document.getElementById('create_new').style.display = 'none';
  document.getElementById('change_repairs').style.display = 'none';
  document.getElementById('scheda_di_lavorazione').style.display = 'none';
  document.getElementById('tutte_le_riparazioni').style.display = 'flex';
  animate1('tutte_le_riparazioni');

  const repairTypeDisplay = document.getElementById('repair-type-display');
  if (type == 'TUTTE') {
    repairTypeDisplay.innerText = 'Tutte le riparazioni';
  }
  if (type == 'INTERNA') {
    repairTypeDisplay.innerText = 'Riparazioni interne';
  }
  if (type == 'ESTERNA') {
    repairTypeDisplay.innerText = 'Riparazioni esterne';
  }
  if (type == 'GARANZIA') {
    repairTypeDisplay.innerText = 'Riparazioni in garanzia';
  }

  /* RESETTARE SEMPRE QUESTE VARIABILI PRIMA DI 
  CHIAMARE getRepairsDef(); DAI BOTTONI DELLA SIDEBAR */
  lastVisible = null;
  allRepairs = [];
  getRepairsDef()
}


function showSchedaDiRiparazione(data) {
  globalThis.currentRepair = data;
  getRepairProducts();
  document.getElementById('customer_name_pdf1').innerText = 'NOME CLIENTE: ' + data.customer_name;
  document.getElementById('customer_phone_pdf1').innerText = 'NUMERO CLIENTE: ' + data.customer_phone;
  document.getElementById('serial_number_pdf1').innerText = 'NUMERO DI SERIE: ' + data.serial_number;
  var parts = data.start.split("-");
  var startConverted = parts[2] + "-" + parts[1] + "-" + parts[0];
  document.getElementById('start_pdf1').innerText = 'DATA ENTRATA: ' + startConverted;
  if (data.end !== ' ') {
    var parts4 = data.end.split("-");
    var endConverted2 = parts4[2] + "-" + parts4[1] + "-" + parts4[0];
    document.getElementById('end_pdf1').innerText = 'DATA RITIRO: ' + endConverted2;
  } else {
    document.getElementById('end_pdf1').innerText = 'DATA RITIRO:';
  }
  document.getElementById('brand_model_pdf1').innerText = 'MACCHINA: ' + data.type + ' ' + data.brand + ' ' + data.model;
  document.getElementById('fault_pdf1').innerText = 'ANOMALIA: ' + data.reported_defect;

  document.getElementById('create_new').style.display = 'none';
  document.getElementById('change_repairs').style.display = 'none';
  document.getElementById('tutte_le_riparazioni').style.display = 'none';
  document.getElementById('scheda_di_lavorazione').style.display = 'flex';
  animate1('scheda_di_lavorazione');
}

function fillElementEditInterface(data) {
  globalThis.currentRepairElement = data;
  document.getElementById('change-element1').style.display = 'flex';
  var quantity = document.getElementById('change-input1');
  var article = document.getElementById('change-input2');
  var description = document.getElementById('change-input3');
  var price = document.getElementById('change-input4');

  quantity.value = data.quantity;
  article.value = data.product;
  description.value = data.product_description;
  price.value = data.product_price;
}

function notificate(message, type) {
  if (type === 'error') {
    document.getElementById('notification_icon1').style.color = 'red';
    document.getElementById('notification_icon1').innerText = 'error';
  } else if (type === 'normal') {
    document.getElementById('notification_icon1').style.color = 'green';
    document.getElementById('notification_icon1').innerText = 'check_circle';
  }
  animate1('notification1');
  document.getElementById('notification1').style.display = 'flex';
  document.getElementById('notification_display1').innerText = message;
  setTimeout(function () {
    document.getElementById('notification1').style.display = 'none';
    animate1('notification1');
  }, 5000);
}





function animate1(htmlId) {
  const masterDurationDef = 200;
  var mioElemento = document.getElementById(htmlId);

  // Definisci le keyframes per l'animazione di dissolvenza
  var keyframes = [
    { opacity: 0 },
    { opacity: 1 }
  ];

  // Opzioni per l'animazione
  var options = {
    duration: masterDurationDef, // durata in millisecondi
    easing: 'ease-in-out' // tipo di transizione
  };

  // Avvia l'animazione
  mioElemento.animate(keyframes, options);

  // Puoi anche aggiungere un listener per gestire l'animazione completata
  mioElemento.addEventListener('animationend', function () {
    console.log('Animazione completata!');
  });
}