function convertir_csv(nodo,ruta){ //convertir csv a json y subir informacion a firebase

   //get nombre tabla
   
    var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"+nodo); 

   d3.tsv("/storage/"+ruta, function(data) {

   for (var i = 0 ; i < data.length; i++) 
   {
    //reemplazar valores   
    for (var key in data[i]) {

      data[i][key] = data[i][key].replace('{','');
      data[i][key] = data[i][key].replace('}','');
    }
       messagesRef.push(data[i]);    
    }

  });
}