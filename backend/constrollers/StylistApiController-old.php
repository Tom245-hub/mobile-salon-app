<?php

include '../config/acl.php';
include '../config/database.php';

class StylistApiController extends DBParams
{
    public function indexAction(){

        $stylistList = [];
        for($i=0; $i <=10; $i++){
            $stylistList[] = [
                'id_stylist' => 4532 . $i,
                'name'       => 'Edyta',
                'image'      => 'https://www.mobilesalon.net/wp-content/uploads/2019/01/MG_5036-465x310.jpg',
                'services'   => [
                    'wedding_hair'      => true,
                    'wedding_makeup'    => true,
                    'event_hair'        => true,
                    'event_makeup'      => true,
                ],
                'city'       => 'Warszawa',
                'desc'       => 'Historie z makijażem zaczęła w 2009 roku, gdy po architekturze krajobrazu postanowiła rozwijać się artystycznie stawiając na szkołę wizażu.',
                'portfolio'  => [
                    'https://www.mobilesalon.net/wp-content/uploads/2020/01/82410671_815812295546693_7539267990898868224_n-990x1322.jpg',
                    'https://www.mobilesalon.net/wp-content/uploads/2020/01/82341076_2530774387190626_2573728056564776960_n-965x1536.jpg',
                    'https://www.mobilesalon.net/wp-content/uploads/2020/01/82290692_477274763197490_4557211024066871296_n-990x1322.jpg',
                    'https://www.mobilesalon.net/wp-content/uploads/2019/01/Stylizacja-fryzury-%C5%9Blubnej-z-warkoczem-1.jpg',
                    'https://www.mobilesalon.net/wp-content/uploads/2019/01/Fryzura-z-warkoczami-1.jpg',
                    'https://www.mobilesalon.net/wp-content/uploads/2018/11/Pr%C3%B3bna-fryzura-%C5%9Blubna-z-dojazdem-upi%C4%99cie-w%C5%82os%C3%B3w-Warszawa-990x1292.jpg',
                ],
            ];
        };

        $response['stylists'] = $stylistList;
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();




// include '../config/acl.php';
// include '../config/database.php';

// class StylistApiController extends DBParams
// {
//     public function indexAction(){

//         $stmt = $this->DBConnect()->query('SELECT * FROM stylists');

//         $url = $_SERVER['REQUEST_URI'];

//         if(strstr($url, '?city=')) {
//             parse_str(parse_url($url)['query'], $params);

//             $stylistList = [];

//             while($row = $stmt->fetch()) {

//                 $city = $row['city'];
//                 $city = str_replace(['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'], ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'], $city);

//                 if (strtolower($city) == $params['city']){
//                     $stylistList[] = [
//                         'id_stylist' => $row['id_stylist'],
//                         'name'       => $row['name'],
//                         'image'      => $row['image'],
//                         'services'   => [
//                             'wedding_hair'      => $row['wedding_hair'] == 1 ? true : false,
//                             'wedding_makeup'    => $row['wedding_makeup'] == 1 ? true : false,
//                             'event_hair'        => $row['event_hair'] == 1 ? true : false,
//                             'event_makeup'      => $row['event_makeup'] == 1 ? true : false,
//                         ],
//                         'city'       => $row['city'],
//                         'desc'       => $row['desc'],
//                     ];
//                 };
//             };

//         } else {
//             $stylistList = [];
//             while($row = $stmt->fetch()) {
//                 $stylistList[] = [
//                     'id_stylist' => $row['id_stylist'],
//                     'name'       => $row['name'],
//                     'image'      => $row['image'],
//                     'services'   => [
//                         'wedding_hair'      => $row['wedding_hair'] == 1 ? true : false,
//                         'wedding_makeup'    => $row['wedding_makeup'] == 1 ? true : false,
//                         'event_hair'        => $row['event_hair'] == 1 ? true : false,
//                         'event_makeup'      => $row['event_makeup'] == 1 ? true : false,
//                     ],
//                     'city'       => $row['city'],
//                     'desc'       => $row['desc'],
//                     'portfolio'  => [
//                         'https://www.mobilesalon.net/wp-content/uploads/2020/01/82410671_815812295546693_7539267990898868224_n-990x1322.jpg',
//                         'https://www.mobilesalon.net/wp-content/uploads/2020/01/82341076_2530774387190626_2573728056564776960_n-965x1536.jpg',
//                         'https://www.mobilesalon.net/wp-content/uploads/2020/01/82290692_477274763197490_4557211024066871296_n-990x1322.jpg',
//                         'https://www.mobilesalon.net/wp-content/uploads/2019/01/Stylizacja-fryzury-%C5%9Blubnej-z-warkoczem-1.jpg',
//                         'https://www.mobilesalon.net/wp-content/uploads/2019/01/Fryzura-z-warkoczami-1.jpg',
//                         'https://www.mobilesalon.net/wp-content/uploads/2018/11/Pr%C3%B3bna-fryzura-%C5%9Blubna-z-dojazdem-upi%C4%99cie-w%C5%82os%C3%B3w-Warszawa-990x1292.jpg',
//                     ],
//                 ];
//             };
//         };

//         $response['stylists'] = $stylistList;
        
//         echo json_encode($response);
//     }
// }

// $api = new StylistApiController();
// echo $api->indexAction();

