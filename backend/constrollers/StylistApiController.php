<?php

include '../config/acl.php';
include '../config/database.php';

class StylistApiController extends DBParams
{
    public function indexAction(){

        $stylistList = [
            [
                'id_stylist' => 1,
                'title'      => 'Edyta',
                'url'        => '/uslugi/fryzury-slubne',
                'img'        => '/img/fryzury-slubne-mobile-salon.jpg',
                'text'       => 'Upięcia, koki z welonem, warkocze, ozdoby.',
            ],
        ];
    

        $response['stylistList'] = $stylistList;
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();


