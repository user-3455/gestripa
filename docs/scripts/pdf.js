function demoFromHTML() {
    // Chiama la funzione per generare il PDF
    convertImageToBase64('res/logo.png');
    /*
     var pdf = new jsPDF('p', 'pt', 'letter');
   source = $('#customers')[0];
   specialElementHandlers = {
       '#bypassme': function (element, renderer) {
           return true
       }
   };
   margins = {
       top: 80,
       bottom: 60,
       left: 40,
       width: 522
   };
   pdf.fromHTML(
   source,
   margins.left,
   margins.top, {
       'width': margins.width,
       'elementHandlers': specialElementHandlers
   },
  
   function (dispose) {
       pdf.save('SCHEDA DI RIPARAZIONE.pdf');
   }, margins);
  
     
  
    function generatePDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
    
      const columnIndexes = [1, 2, 3, 4]; // Prendi solo queste colonne
    
      // Estrai i dati dalla tabella HTML
      const { headers, data } = extractTableData("pdf_table_master", columnIndexes);
    
      // Aggiungi la tabella al PDF
      doc.autoTable({
        head: [headers], // Intestazioni
        body: data, // Dati
        startY: 20, // Posizione iniziale della tabella
      });
    
      // Salva il PDF
      doc.save("report.pdf");
    }
    
    */
}

function extractTableData(tableId, columnIndexes) {
    const table = document.getElementById(tableId);
    const headers = [];
    const data = [];

    // Estrai le intestazioni della tabella
    const headerCells = table.querySelectorAll("thead th");
    headerCells.forEach((cell, index) => {
        if (columnIndexes.includes(index)) {
            headers.push(cell.innerText.trim());
        }
    });

    // Estrai i dati delle righe
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const rowData = [];
        const cells = row.querySelectorAll("td");
        cells.forEach((cell, index) => {
            if (columnIndexes.includes(index)) {
                rowData.push(cell.innerText.trim());
            }
        });
        data.push(rowData);
    });

    return { headers, data };
}

// Converti l'immagine in Base64 e genera il PDF
function convertImageToBase64(base64Image) {
    generatePDFWithImageAndText(base64Image);
};

function generatePDFWithImageAndText(base64Image) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Aggiungi un'immagine nella parte superiore
    doc.addImage(base64Image, "PNG", 50, 10, 100, 40); // (x, y, width, height)

    // Aggiungi un sottotitolo o un paragrafo
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text('NOME CLIENTE: ' + globalThis.currentRepair.customer_name, 10, 60);
    doc.text('NUMERO CLIENTE: ' + globalThis.currentRepair.customer_phone, 10, 70);
    doc.text('NUMERO DI SERIE: ' + globalThis.currentRepair.serial_number, 10, 80);

    var parts = globalThis.currentRepair.start.split("-");
    var startConverted = parts[2] + "-" + parts[1] + "-" + parts[0];
    doc.text('DATA ENTRATA: ' + startConverted, 10, 90);
    if (globalThis.currentRepair.end !== ' ') {
        var parts4 = globalThis.currentRepair.end.split("-");
        var endConverted2 = parts4[2] + "-" + parts4[1] + "-" + parts4[0];
        doc.text('DATA RITIRO: ' + endConverted2, 10, 100);
    } else {
        doc.text('DATA RITIRO:', 10, 100);
    }
    doc.text('MACCHINA: ' + globalThis.currentRepair.type + ' ' + globalThis.currentRepair.brand + ' ' + globalThis.currentRepair.model, 10, 110);
    doc.text('ANOMALIA: ' + globalThis.currentRepair.reported_defect, 10, 120);
    doc.text('ACCESSORI: ' + globalThis.currentRepair.accessories, 10, 130);
    doc.text('TIPO RIPARAZIONE: ' + globalThis.currentRepair.repair_type, 10, 140);


    const columnIndexes = [1, 2, 3, 4]; // Prendi solo queste colonne (parto a contare dalla colonna 0)

    // Estrai i dati dalla tabella HTML
    const { headers, data } = extractTableData("pdf_table_master", columnIndexes);

    // Aggiungi la tabella
    doc.autoTable({
        head: [headers],
        body: data,
        startY: 150, // Posiziona la tabella a partire dalla coordinata Y
    });

    // Recupera la posizione finale della tabella
    const finalY = doc.lastAutoTable.finalY;

    doc.text('TOTALE RICAMBI: ' + totalPrice + ' EURO', 10, finalY + 10);
    doc.text('MANODOPERA: ' + globalThis.currentRepair.manodopera + ' EURO', 10, finalY + 20);
    doc.text('TOTALE +IVA: ' + parseFloat(globalThis.currentRepair.manodopera) + (parseFloat(totalPrice)) + ' EURO', 10, finalY + 30);
    doc.text('STATO VEICOLO: ' + globalThis.currentRepair.status, 10, finalY + 40);
    if (globalThis.currentRepair.data_avviso) {
        var parts3 = globalThis.currentRepair.data_avviso.split("-");
        var converted3 = parts3[2] + "-" + parts3[1] + "-" + parts3[0];
        doc.text('DATA AVVISO: ' + converted3, 10, finalY + 50);
    } else {
        doc.text('DATA AVVISO:', 10, finalY + 50);
    }


    /*
  doc.setFont("helvetica", "italic");
  doc.setFontSize(12);
  doc.text(
    "Nota: Questa tabella è stata generata dinamicamente partendo da una tabella HTML.",
    10,
    finalY + 70
  );
    */

    doc.save("Scheda di lavorazione");
}