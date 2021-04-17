<?php

include '../config/acl.php';
include '../config/database.php';

class SliderApiController extends DBParams
{
    public function indexAction(){

        $slideList = [
            [
                'id_slide' => 1,
                'title'      => 'Trendy fryzur ślubnych 2021',
                'url'        => '/uslugi/fryzury-slubne',
                'img'        => '/img/fryzury-slubne-mobile-salon.jpg',
                'text'       => 'Upięcia, koki z welonem, warkocze, ozdoby.',
            ],
            [
                'id_slide' => 2,
                'title'      => 'Sprawdź swoją stylistkę i zamów spotkanie próbne',
                'url'        => '/uslugi/makijaze-slubne',
                'img'        => '/img/makijaze-slubne-mobile-salon.jpg',
                'text'       => 'Trwałe i piękne, delikatne lub wyraźne.',
            ],
            [
                'id_slide' => 3,
                'title'      => 'Standardy naszych usług',
                'url'        => '/uslugi/fryzury-okazyjne',
                'img'        => '/img/fryzjerki-slubne-mobile-salon.jpg',
                'text'       => 'Trwałe i piękne, delikatne lub wyraźne.',
            ],
           
        ];
    
        $response['slideList'] = $slideList;
        
        echo json_encode($response);
    }
}

$api = new SliderApiController();
echo $api->indexAction();


