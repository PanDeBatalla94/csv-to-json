<html lang="en">
  <meta charset="utf-8">
  <!-- Material Design Lite -->
  <link rel="stylesheet" href="/upload_csv/web-start/styles/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="/upload_csv/web-start/styles/bootstrap/js/bootstrap.min.js">
  <script src="scripts/main.js"></script>
  <script src="scripts/d3.js"></script>
  <script src="scripts/d3.min.js"></script>
 <script src="https://cdn.firebase.com/js/client/2.0.2/firebase.js"></script>


</head>
<body>
<div class="container">


<?php
$nombre = basename($_FILES["fileToUpload"]["name"]);
$target_dir = "C:/xampp/htdocs/upload_csv/web-start/json/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
echo $target_file;

$fileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Allow certain file formats
if($fileType != "csv" ) {
    echo "Solo archivos csv. ";
}
else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "El archivo ". basename( $_FILES["fileToUpload"]["name"]). " ha sido subido.";

        echo '
<input type="hidden" value="'.$_POST['nomb_tabla'].'" id="nomb_tabla">
<input type="hidden" value = "'.$nombre.'" id="archivo">
<script type="text/javascript">
    convertir_csv();
</script>
  
        ';


    } else {
        echo "Error al subir archivo.";
    }
   }
?>

</div>
</body>
</html>




