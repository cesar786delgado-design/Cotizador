function generatePDF(){
 const {jsPDF}=window.jspdf;
 const doc=new jsPDF();
 doc.text('Cotización Materiales Jalisco',10,10);
 doc.save('cotizacion.pdf');
}