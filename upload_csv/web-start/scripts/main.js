
function convertir_csv(){
   //e.preventDefault();
   console.log("entro");
   event.preventDefault();
   //get nombre tabla
    nodo =  document.getElementById('nomb_tabla').value;

   var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"+nodo);
   d3.csv("/upload_csv/web-start/json/prueba77.csv", function(data) {
//  document.getElementById('resultado').value=data;

   var or;
   var aux;
   for (var i = 0 ; i < data.length; i++) 
   {
    console.log(Object.keys(data[i]).length);
        
    for (var key in data[i]) {

      data[i][key] = data[i][key].replace('{','');
      data[i][key] = data[i][key].replace('}','');

    }
     

      // messagesRef.push(data[i]);    
    }
  });
}

