
function convertir_csv(){ //convertir csv a json y subir informacion a firebase

   //get nombre tabla
    nodo =  document.getElementById('nomb_tabla').value;
    archivo =  document.getElementById('archivo').value;
    var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"+nodo); 

   d3.tsv("/upload_csv/web-start/json/"+archivo, function(data) {

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


function obtener_nodos(){

  var html='';
 var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"); 
/*var rootRef = messagesRef.database.ref();
var urlRef = rootRef.child("user1/DAA notes/URL");
urlRef.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    console.log(child.key+": "+child.val());
  });
});
 */

 var t = '';

  /*messagesRef.on('child_added', function(snapshot) {

   // all records after the last continue to invoke this function
   console.log(snapshot.key());
   html = html+'<div class="card"> <div class="card-header" role="tab" id="headingOne"><h5 class="mb-0">';
   html = html+'       <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">';
   html = html+         snapshot.key();
   html = html+'       </a> </h5></div>';

   html = html+'   <div id="collapseOne" class="collapse " role="tabpanel" aria-labelledby="headingOne">';
   html = html+'     <div class="card-block">';
   html = html+'        <table>';
            
   html = html+'       </table>';
   html = html+'     </div>';
   html = html+'   </div>';
   html = html+' </div>';
            
          

   //, snapshot.val()



});
console.log(t);*/

//child('/scenes/' + projId)
var keys = [];
var counts = [];
var ref = messagesRef.ref();
messagesRef.on('child_added',function(snap) {
  
html='';
html = html+'<div class="card"> <div class="card-header" role="tab" id="headingOne"><h5 class="mb-0">';
   html = html+'       <a data-toggle="collapse" data-parent="#accordion" href="#'+snap.key()+'" aria-expanded="true" aria-controls="collapseOne">';
   html = html+         snap.key();
   html = html+'       </a> </h5></div>';

   html = html+'   <div id="'+snap.key()+'" class="collapse " role="tabpanel" aria-labelledby="headingOne">';
   html = html+'     <div class="card-block">';
   html = html+'        <table>';
  

  //html = html+'<tr>';
   
   count = 0;
   html_tab='';
   snap.forEach(function(child) {
      console.log(Object.keys(child.val()).length);
      if(count == 0){
        html_tab = html_tab+'<tr>';
        for(var j = 0 ; j<Object.keys(child.val()).length ; j++ )
        {
           html_tab = html_tab+'<th>'+Object.keys(child.val())[j]+'</th>';
        }
        html_tab = html_tab+'</tr>';
      }
      else{
         for(var j = 0 ; j<Object.keys(child.val()).length ; j++ )
      var valor = child.child(Object.keys(child.val())[j]).val();
        {
           html_tab = html_tab+'<th>'+valor+'</th>';
        }
     }

    count++;

   });
   html = html + html_tab;
//   html = html+'</tr>';
   html = html+'</table>';
   html = html+'';

   html = html+'';
            
   html = html+'       </table>';
   html = html+'     </div>';
   html = html+'   </div>';
   html = html+' </div>';

 document.getElementById('listaNodos').insertAdjacentHTML('beforeend', html);

});



}
