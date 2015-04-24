<?php
	if (isset($_FILES['imageUpload']))
	{
		try {
		    switch ($_FILES['imageToUpload']['error']) {
		        case UPLOAD_ERR_OK:
		            break;
		        case UPLOAD_ERR_NO_FILE:
		            throw new RuntimeException('nofile');
		        case UPLOAD_ERR_INI_SIZE:
		        case UPLOAD_ERR_FORM_SIZE:
		            throw new RuntimeException('sizelimit');
		        default:
		            throw new RuntimeException('unknown');
		    }

		    // Check filesize
		    if ($_FILES['imageToUpload']['size'] > 2097152) {
		        throw new RuntimeException('sizelimit');
		    }

		    $fileName = $_FILES['imageToUpload']['name'];
		    $fileType = $_FILES['imageToUpload']['type'];
		    $acceptedExt = array("image/gif","image/jpeg","image/jpg","image/png");

		    if (!in_array($fileType, $acceptedExt))
		    {
		    	throw new RuntimeException('format');
		    }

		    $fileContent = file_get_contents($_FILES['imageToUpload']['tmp_name']);
		    $dataURL = 'data:' . $fileType . ';base64,' . base64_encode($fileContent); 

		    $jsonData = json_encode(array(
		    	'name' => $fileName,
		    	'type' => $fileType,
		    	'dataUrl' => $dataURL));

		    echo $jsonData;

		} catch (RuntimeException $e) {
		    $error = $e->getMessage();
		    echo $error;
		}
	}
	else
	{
		echo 'sizelimit';
	}
 
 ?>