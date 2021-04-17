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
                    'url'        => '/stylistki/warszawa/01-edyta',
                    'img'        => '/img/stylist/warszawa/01-edyta/01-edyta.jpg',
                    'text'       => 'Historie z makijażem zaczęła w 2009 roku, gdy po architekturze krajobrazu postanowiła rozwijać się artystycznie stawiając na szkołę wizażu. Szkoła “Atlook” rozkochała Edytę w makijażu, co skłoniło ją do dalszego rozwoju w kierunku charakteryzacji w “Studio Sztuki” – uzyskała tam tytuł technik plastyk. Charakteryzacja to coś co łączy jej dwie pasje – ludzi oraz makijaż/stylizację. Sprawia jej to ogromną przyjemność. Prywatnie również maluje oraz zajmuje się rysunkiem.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 10,
                ],
                [
                    'id_stylist' => 2,
                    'title'      => 'Patrycja',
                    'url'        => '/stylistki/warszawa/02-patrycja',
                    'img'        => '/img/stylist/warszawa/02-patrycja/02-patrycja.jpg',
                    'text'       => 'Patrycja z wykształcenia jest kosmetologiem, wizażystką oraz stylistką fryzur. W zawodzie makijażysty pracuje już 10 lat. Stylizacjami fryzur zajmuje się od 4 lat. Oprócz indywidualnych/ślubnych i wieczorowych stylizacji pracowała na targach kosmetycznych, eventach ślubnych oraz dla marek kosmetycznych m.in. Clarinsa, Eveline oraz na planie do reklamy Nutricia.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 10,
                ],
                [
                    'id_stylist' => 3,
                    'title'      => 'Dagmara',
                    'url'        => '/stylistki/warszawa/06-dagmara',
                    'img'        => '/img/stylist/warszawa/06-dagmara/06-dagmara.jpg',
                    'text'       => 'Jest studentką Wyższej Szkoły Artystycznej w Warszawie na kierunku malarstwo ze specjalizacją charakteryzacji i kostiumografii. Od zawsze interesował ją świat mody, makijażu i charakteryzacji. Postanowiła więc zająć się tym profesjonalnie. Cały czas rozwija się i zdobywa nowe doświadczenie pracując przy sesjach zdjęciowych, planach filmowych, pokazach mody. Duży sukces odniosła suknia barokowa jej autorstwa, która wraz z wykonanym przez Dagmarę epokowym makijażem i fryzurą została zaprezentowana na pokazie mody “Vive la mode” w Pałacu w Wilanowie. Wydarzenie można było oglądać w programie “Co za tydzień”, a od 15 lipca 2017 roku na czasowej wystawie w jednej z sal Pałacu w Wilanowie.Dagmara jest osobą otwartą i kreatywną, zrealizuje każde zlecenie z zakresu wizażu, charakteryzacji, kostiumu i fryzur. Jeśli szukają Państwo makijażu, fryzury na wyjątkową okazję lub pełnej charakteryzacji np. w stylu lat 20 łącznie z kostiumem i rekwizytem na imprezę tematyczną Dagmara służy pomocą.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 3,
                ],
                [
                    'id_stylist' => 4,
                    'title'      => 'Polina',
                    'url'        => '/stylistki/warszawa/07-polina',
                    'img'        => '/img/stylist/warszawa/07-polina/07-polina.jpg',
                    'text'       => 'Polina jest profesjonalną wizażystką i stylistką fryzur z 4-letnim doświadczeniem. Swoją przygodę ze stylizacją rozpoczęła we wczesnym dzieciństwie. Od 5 roku życia zawodowo uprawia taniec towarzyski, przez co już w wieku 11 lat musiała nauczyć się samodzielnie malować i czesać, przygotowując się na turnieje taneczne. Na początku było to tylko zajęciem dodatkowym, z czasem właśnie fryzjerstwo i wizaż stały się jej największą pasją i z tym wiąże swoją przyszłość. Początkowo wszystkiego uczyła się sama i rozpoczynała jako specjalistka makijażu i fryzur wyłącznie turniejowych, ale z czasem zaczęła poszerzać swoje horyzonty. Po przeprowadzce do Polski rozpoczęła naukę makijażu i stylizacji fryzur pod okiem specjalistów w Szkole Wizażu i Charakteryzacji. Na dzień dzisiejszy ma za sobą doświadczenie w innych kierunkach, w tym wystylizowanie i obsługę różnych sesji zdjęciowych, stylizację przy dużych firmowych eventach i wykonywanie makijaży i fryzur okolicznościowych (chrzciny, śluby, zaręczyny itp.). Polina jest z natury perfekcjonistką, ale również osobą pełną fantazji i tryskającą pomysłami. Jej umiejętności ograniczone są tylko wyobraźnią, nie istnieje dla niej fryzura, której nie mogłaby wykonać. Makijaże oraz fryzury są trwałe i wyglądają doskonale do ostatniej chwili, dzięki czemu możesz szaleć do białego rana będąc pewną, że wyglądasz idealnie.',
                    'position'   => [
                        'hair_stylist' => false,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 4,
                ],
                [
                    'id_stylist' => 5,
                    'title'      => 'Ola',
                    'url'        => '/stylistki/warszawa/08-ola',
                    'img'        => '/img/stylist/warszawa/08-ola/08-ola.jpg',
                    'text'       => 'Aleksandra jest fryzjerką z pasji i zamiłowania. Pracuje także w studiu fryzjerskim, gdzie wykonuje profesjonalne koloryzacje i strzyżenia. Najbardziej cieszy się kiedy może wykonać upięcie fryzury ślubnej dla przyszłej Panny Młodej w jej wyjątkowym dniu. Nie boi się wyzwań i zawsze stara się sprostać oczekiwaniom najbardziej wymagających. Każda jej klientka może być pewna przeprowadzenia profesjonalnej konsultacji, która odbywa się zawsze przed rozpoczęciem stylizacji fryzury. Stylizacje Aleksandry zostały wyróżnione przyznaniem drugiego miejsca w plebiscycie Mistrzowie Urody w kategorii Fryzjer Roku 2018 w Warszawie.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 8,
                ],
                [
                    'id_stylist' => 6,
                    'title'      => 'Martyna',
                    'url'        => '/stylistki/warszawa/09-martyna',
                    'img'        => '/img/stylist/warszawa/09-martyna/09-martyna.jpg',
                    'text'       => 'Martyna makijażem interesuje się od ponad 5 lat. Jest to Jej największa pasja. Uwielbia podkreślać to co jest naturalnie ładne w kobietach. Świetnie czuje się także w modelowaniach włosów, falach i upięciach fryzur. W wolnym czasie niska skrzydłowa w kobiecej drużynie koszykówki.',
                    'position'   => [
                        'hair_stylist' => false,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 2,
                ],
                [
                    'id_stylist' => 7,
                    'title'      => 'Ilona',
                    'url'        => '/stylistki/krakow/03-ilona',
                    'img'        => '/img/stylist/krakow/03-ilona/03-ilona.jpg',
                    'text'       => 'Ilona w swoim życiu najbardziej kocha swoja rodzinę i hobby, a tym drugim jest makijaż i stylizacja fryzur. Zawsze mówi: “jeśli twoje hobby jest twoją pracą, wtedy jesteś szczęśliwy” i tym właśnie szczęściem i radością dzieli się ze swoimi klientami.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 10,
                ],
                [
                    'id_stylist' => 8,
                    'title'      => 'Małgorzata',
                    'url'        => '/stylistki/krakow/04-malgorzata',
                    'img'        => '/img/stylist/krakow/04-malgorzata/04-malgorzata.jpg',
                    'text'       => 'Małgorzata od 11 lat zajmuje się fryzurami i stylizacjami. Jej pasją jest praca przy sesjach zdjęciowych oraz stylizacja ślubna. Jest absolwentką liceum plastycznego w Krakowie oraz Szkoły Artystycznego Projektowania Ubioru w Krakowie. W wolnych chwilach tworzy ceramikę, biżuterię oraz maluje obrazy.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 11,
                ],
                [
                    'id_stylist' => 9,
                    'title'      => 'Ola',
                    'url'        => '/stylistki/wroclaw/05-ola',
                    'img'        => '/img/stylist/05-ola/05-ola.jpeg',
                    'text'       => 'Aleksandra ukończyła kurs makijażu profesjonalnego I stopnia w prestiżowej szkole – Pro Academy School of Makeup we Wrocławiu. Swoją pracę wykonuje przy sesjach zdjęciowych, na targach kosmetycznych jak również z klientkami indywidualnymi. Każdej klientce poświęca wiele uwagi, aby jak najlepiej sprostać wymaganym oczekiwaniom. Systematycznie kształci zasób swojej wiedzy uczestnicząc w szkoleniach i śledząc najnowsze wydarzenia w świecie makijażu.',
                    'position'   => [
                        'hair_stylist' => false,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 3,
                ],

        ];

        $response['stylistList'] = $stylistList;
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();


