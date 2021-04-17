<?php

include '../config/acl.php';
include '../config/database.php';

class StylistApiController extends DBParams
{
    public function indexAction(){

        $stylistList = [
            [
                'id_service' => 1,
                'title'      => 'Fryzury ślubne z dojazdem',
                'url'        => '/uslugi/fryzury-slubne',
                'img'        => '/img/fryzury-slubne-mobile-salon.jpg',
                'text'       => 'Upięcia, koki z welonem, warkocze, ozdoby.',
            ],
            [
                'id_service' => 2,
                'title'      => 'Makijaże ślubne z dojazdem',
                'url'        => '/uslugi/makijaze-slubne',
                'img'        => '/img/makijaze-slubne-mobile-salon.jpg',
                'text'       => 'Trwałe i piękne, delikatne lub wyraźne.',
            ],
            [
                'id_service' => 3,
                'title'      => 'Fryzury okazyjne z dojazdem',
                'url'        => '/uslugi/fryzury-okazyjne',
                'img'        => '/img/fryzjerki-slubne-mobile-salon.jpg',
                'text'       => 'Trwałe i piękne, delikatne lub wyraźne.',
            ],
            [
                'id_service' => 4,
                'title'      => 'Makijaże okazyjne z dojazdem',
                'url'        => '/uslugi/makijaze-okazyjne',
                'img'        => '/img/fryzjerki-slubne-mobile-salon.jpg',
                'text'       => 'Trwałe i piękne, delikatne lub wyraźne.',
            ],
        ];
    

        $response['stylistList'] = $stylisteList;
        
        echo json_encode($response);
    }
}

$api = new StylisteApiController();
echo $api->indexAction();


