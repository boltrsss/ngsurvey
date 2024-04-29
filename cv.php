<?php 


	if( isset($_POST['cid']) ){

	 	$cid 			= $_POST['cid'];

	 	// 1) replace URL with your BeMob postback URL (ie. xxxxx.bemobtracks.com to 9aert.bemobtracks.com )
	 	$postback_url 	= 'http://xxxxx.bemobtracks.com/postback?cid='.$cid.'&payout=OPTIONAL&txid=OPTIONAL&status=OPTIONAL';

		// send back to tracker
		$curl  = curl_init();
		curl_setopt($curl, CURLOPT_URL, $postback_url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($curl);
		curl_close($curl);
		
	}
	

?>