<?php
$target_dir = "/upload_csv/web-start/json/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
echo $target_file;
exit();
$fileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Allow certain file formats
if($fileType != "csv" ) {
    echo "Sorry, only CSV files are allowed. ";
}
else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
?>