// Global Variables
var SS=SpreadsheetApp.openById('1W-G2H9WszgrnmuphUOSssxJ5NyXXgXOIzDNw8Akh5To');
var hojaProductos=SS.getSheetByName('Productos');

function doGet() {

  //var data=hojaProductos.getDataRange().getValues();
 
 /*var codigo=[];

  data.forEach(row=>{
        if((row[1]!='') && (row[1]!='CODIGO')){
    
      codigo.push(row[1]);
   //console.log(productos)
}

 
  })*/

    var template=HtmlService.createTemplateFromFile('index');
   
  //template.arreCodi = codigo;
  return template.evaluate();  
}


function dataPedidos(){

var dataProducto=hojaProductos.getDataRange().getDisplayValues();
dataProducto.shift();
return dataProducto;

  
}

function userClicked(pedidos){
  var hojaRegistro=SS.getSheetByName('registro');

  hojaRegistro.appendRow([pedidos.codigo]);
  //onsol.log(name +  "Clicked the Button");


}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
