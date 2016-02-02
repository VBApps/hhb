<?php
session_start();
if (isset($_SESSION['loggedin'])) {
	$servername = "localhost";
	$username = "me";
	$password = "simsim07";

	// Create connection
	$conn = mysql_connect($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	$resseldb = mysql_select_db("hhb",$conn);
	$rawData = file_get_contents("php://input");
	$data = json_decode($rawData,true);
	if (isset($_GET['getProfile'])) {
		query("SELECT * FROM users WHERE id=".$_SESSION['id']);
	}
	
	if (isset($_GET['action'])) {
		if ($_GET['action'] === 'create') {
			switch($_GET['tag']) {
				case 'inoutputs':
					insert("INSERT INTO inouts (name,date,amount,userid,booked) VALUES('".utf8_decode($data['inoutname'])."','".$data['inoutdate']."',".$data['inoutprice'].",".$_SESSION['id'].",".$data['booked'].")");
					break;
				default:
					echo 'default';
			}
		}
		if ($_GET['action'] === 'read') {
			switch($_GET['tag']) {
				case 'inoutputs':
					query("SELECT * FROM inouts WHERE userid=".$_SESSION['id']);
					break;
				default:
					echo 'default';
			}
		}
	}
} else {
	$ReturnArr['success'] = false;
	$ReturnArr['error'] = 'not_logged_in';
	echo json_encode($ReturnArr);
}	

function query($sql) {
	$res = mysql_query($sql);
	if ($res){
		while ($row = mysql_fetch_assoc($res)) {
			$temp[] = $row;
		}
		$ReturnArr['success'] = true;
		$ReturnArr['total_rows'] = count($temp);
		$ReturnArr['rows'] = $temp;
		echo json_encode($ReturnArr);
	} else if (!$res) {
		//echo "Konnte Abfrage ($sql) nicht erfolgreich ausführen von DB: " . mysql_error();
		$ReturnArr['success'] = false;
		$ReturnArr['error'] = mysql_error();
		echo json_encode($ReturnArr);
		exit;
	}
}

function insert($sql) {
	$res = mysql_query($sql);
	if ($res){
		$ReturnArr['success'] = true;
		echo json_encode($ReturnArr);
		exit;
	} else if (!$res) {
		//echo "Konnte Abfrage ($sql) nicht erfolgreich ausführen von DB: " . mysql_error();
		$ReturnArr['success'] = false;
		$ReturnArr['error'] = mysql_error();
		echo json_encode($ReturnArr);
		exit;
	}
}

function currency_list() {
	return array (
            'ALL' => 'Albania Lek',
            'AFN' => 'Afghanistan Afghani',
            'ARS' => 'Argentina Peso',
            'AWG' => 'Aruba Guilder',
            'AUD' => 'Australia Dollar',
            'AZN' => 'Azerbaijan New Manat',
            'BSD' => 'Bahamas Dollar',
            'BBD' => 'Barbados Dollar',
            'BDT' => 'Bangladeshi taka',
            'BYR' => 'Belarus Ruble',
            'BZD' => 'Belize Dollar',
            'BMD' => 'Bermuda Dollar',
            'BOB' => 'Bolivia Boliviano',
            'BAM' => 'Bosnia and Herzegovina Convertible Marka',
            'BWP' => 'Botswana Pula',
            'BGN' => 'Bulgaria Lev',
            'BRL' => 'Brazil Real',
            'BND' => 'Brunei Darussalam Dollar',
            'KHR' => 'Cambodia Riel',
            'CAD' => 'Canada Dollar',
            'KYD' => 'Cayman Islands Dollar',
            'CLP' => 'Chile Peso',
            'CNY' => 'China Yuan Renminbi',
            'COP' => 'Colombia Peso',
            'CRC' => 'Costa Rica Colon',
            'HRK' => 'Croatia Kuna',
            'CUP' => 'Cuba Peso',
            'CZK' => 'Czech Republic Koruna',
            'DKK' => 'Denmark Krone',
            'DOP' => 'Dominican Republic Peso',
            'XCD' => 'East Caribbean Dollar',
            'EGP' => 'Egypt Pound',
            'SVC' => 'El Salvador Colon',
            'EEK' => 'Estonia Kroon',
            'EUR' => 'Euro Member Countries',
            'FKP' => 'Falkland Islands (Malvinas) Pound',
            'FJD' => 'Fiji Dollar',
            'GHC' => 'Ghana Cedis',
            'GIP' => 'Gibraltar Pound',
            'GTQ' => 'Guatemala Quetzal',
            'GGP' => 'Guernsey Pound',
            'GYD' => 'Guyana Dollar',
            'HNL' => 'Honduras Lempira',
            'HKD' => 'Hong Kong Dollar',
            'HUF' => 'Hungary Forint',
            'ISK' => 'Iceland Krona',
            'INR' => 'India Rupee',
            'IDR' => 'Indonesia Rupiah',
            'IRR' => 'Iran Rial',
            'IMP' => 'Isle of Man Pound',
            'ILS' => 'Israel Shekel',
            'JMD' => 'Jamaica Dollar',
            'JPY' => 'Japan Yen',
            'JEP' => 'Jersey Pound',
            'KZT' => 'Kazakhstan Tenge',
            'KPW' => 'Korea (North) Won',
            'KRW' => 'Korea (South) Won',
            'KGS' => 'Kyrgyzstan Som',
            'LAK' => 'Laos Kip',
            'LVL' => 'Latvia Lat',
            'LBP' => 'Lebanon Pound',
            'LRD' => 'Liberia Dollar',
            'LTL' => 'Lithuania Litas',
            'MKD' => 'Macedonia Denar',
            'MYR' => 'Malaysia Ringgit',
            'MUR' => 'Mauritius Rupee',
            'MXN' => 'Mexico Peso',
            'MNT' => 'Mongolia Tughrik',
            'MZN' => 'Mozambique Metical',
            'NAD' => 'Namibia Dollar',
            'NPR' => 'Nepal Rupee',
            'ANG' => 'Netherlands Antilles Guilder',
            'NZD' => 'New Zealand Dollar',
            'NIO' => 'Nicaragua Cordoba',
            'NGN' => 'Nigeria Naira',
            'NOK' => 'Norway Krone',
            'OMR' => 'Oman Rial',
            'PKR' => 'Pakistan Rupee',
            'PAB' => 'Panama Balboa',
            'PYG' => 'Paraguay Guarani',
            'PEN' => 'Peru Nuevo Sol',
            'PHP' => 'Philippines Peso',
            'PLN' => 'Poland Zloty',
            'QAR' => 'Qatar Riyal',
            'RON' => 'Romania New Leu',
            'RUB' => 'Russia Ruble',
            'SHP' => 'Saint Helena Pound',
            'SAR' => 'Saudi Arabia Riyal',
            'RSD' => 'Serbia Dinar',
            'SCR' => 'Seychelles Rupee',
            'SGD' => 'Singapore Dollar',
            'SBD' => 'Solomon Islands Dollar',
            'SOS' => 'Somalia Shilling',
            'ZAR' => 'South Africa Rand',
            'LKR' => 'Sri Lanka Rupee',
            'SEK' => 'Sweden Krona',
            'CHF' => 'Switzerland Franc',
            'SRD' => 'Suriname Dollar',
            'SYP' => 'Syria Pound',
            'TWD' => 'Taiwan New Dollar',
            'THB' => 'Thailand Baht',
            'TTD' => 'Trinidad and Tobago Dollar',
            'TRY' => 'Turkey Lira',
            'TRL' => 'Turkey Lira',
            'TVD' => 'Tuvalu Dollar',
            'UAH' => 'Ukraine Hryvna',
            'GBP' => 'United Kingdom Pound',
            'USD' => 'United States Dollar',
            'UYU' => 'Uruguay Peso',
            'UZS' => 'Uzbekistan Som',
            'VEF' => 'Venezuela Bolivar',
            'VND' => 'Viet Nam Dong',
            'YER' => 'Yemen Rial',
            'ZWD' => 'Zimbabwe Dollar'
        );
}

?>