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
                    'id_stylist' => 6,
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
                    'id_stylist' => 7,
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
                    'id_stylist' => 8,
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
                    'id_stylist' => 9,
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
                    'id_stylist' => 14,
                    'title'      => 'Joanna',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Dla Joanny największą wartością w życiu jest wolność, którą wyraża w pasji kreowania wizerunku. Lubi sprawiać, by kobieta poczułą się jeszcze bardziej piękna i wyjątkowa. Detal, szczegół, precyzja to dla niej podstawa tworzenia. Podczas praktyki zawodowej miała wielką przyjemność współpracować z Ewą Chodakowską, “Wysokimi Obcasami”, “Twoim Stylem”, “Galerią Centrum”, przy sesjach zdjęciowych, jak i na planach produkcji firmowych. Jednym z jej hobby jest tworzenie biżuterii. Kilka lat temu w Warszawskiej pracowni jubilerskiej rozpoczęła szkolenie, dzięki któremu dziś roztapia granulki srebra, nadając im nową, niepowtarzalną formę.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 10,
                ],
                [
                    'id_stylist' => 15,
                    'title'      => 'Karolina',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Karolina skończyła Studio Sztuki w 2004 roku. Przez wszystkie lata pracowała w zawodzie. W ostatnim czasie zajęła II miejsce w ogólnopolskim konkursie “Bitwa na Pędzle” organizowanym przez BeautyDays i INGLOT',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 13,
                ],
                [
                    'id_stylist' => 18,
                    'title'      => 'Beata',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Fryzjerstwo jest pasją Beaty od czasów dzieciństwa. Szczególnie odnajduję się w uczesaniach, stylizacjach wieczorowych i koloryzacjach. Chcąc zadbać kompleksowo o urodę swoich klientek wykonuje także usługi stylizacji paznokci. Pracuje tylko na profesjonalnych kosmetykach włoskiej firmy Emme Diciotto. Stawia na jakość i dobrą kondycję włosów.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => false,
                    ],
                    'experience'  => 5,
                ],
                [
                    'id_stylist' => 10,
                    'title'      => 'Patrycja',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => '“Nie jesteśmy idealne, ale każda z nas jest wyjątkowa” – ten cytat jest dla Patrycji odzwierciedleniem jej pracy. Za swoje zadanie uważa podkreślenie makijażem i fryzurą urody, a nie przemalowaniem na kogoś innego. W dążeniu do idealnych makijaży pomagają jej szkolenia, w których często uczestniczy między innymi z Magdą Pieczonką, Maxineczką, Armani i Dior.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 8,
                ],
                [
                    'id_stylist' => 11,
                    'title'      => 'Aleksandra',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Od samego początku praca dla Aleksandry wywodziła się z pasji, chęci do dalszego pogłębiania wiedzy oraz do poznania wszelkich technik i tajników pracy jako wizażystka. Swoje umiejętności rozwijała zarówno samodzielnie, jak i pod okiem profesjonalistów, dzięki czemu stale poszerza swoją wiedzę w dziedzinach z branży beauty. Z zamiłowania do zawodu, od zawsze towarzyszy jej chęć pomocy i służenia radą osobom zagubionym w ciągle zmieniającym się świecie urody, a dzięki umiejętności postawienia się w sytuacji drugiej osoby, wiele jej rad skutkuje pozytywnym odbiorem i skutecznością wynikającą z nabytego w pracy doświadczenia.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 3,
                ],
                [
                    'id_stylist' => 12,
                    'title'      => 'Kasia',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Wizażem interesowała się od zawsze ale dopiero po skońćzeniu 30 lat postanowiłą się zająć tym na poważnie. W tej chwili kończy renomowaną szkołę Beauty Art. Najbardziej lubi pracę z klientkami indywidualnymi tzw. “zwykłymi kobietami”, które dzięki makijażowi rozkwitają.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 5,
                ],
                [
                    'id_stylist' => 13,
                    'title'      => 'Weronika',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Weronika jest stylistką z zamiłowania do piękna i upiększania. Dokłada wszelkich starań, aby być na bieżąco ze wszystkimi światowymi trendami w sferze beauty. Zapraszamy do skorzystania z jej usług.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 2,
                ],
                
                [
                    'id_stylist' => 3,
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
                    'id_stylist' => 4,
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
                    'id_stylist' => 16,
                    'title'      => 'Justyna',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Dla Justyny makijaż jest formą kreacji wizerunku. W swojej pracy bazuje na technikach poznanych dzięki różnorodnym kursom jakie odbyła oraz ukończeniu szkoły wizażu z tytułem czeladnika. Jako wizażystka pracuje od 8 lat. Każdy projekt traktuje jako indywidualną i spójną całość. Tworzenie makijażu to dla niej sztuka, dlatego zdarza się, że łamie sztywne schematy. Prace Justyny opublikował magazyn L’Officiel, Elle i portal Vogue Italia.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 8,
                ],
                [
                    'id_stylist' => 17,
                    'title'      => 'Yana',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Yana jest wizażystką rozkochaną w swoim zawodzie. W pracy najbardziej pasjonuje ją przemiana. Każdą z klientek traktuje w indywidualny sposób. Ogromną radość sprawia jej możliwość wydobycia i podkreślenia tego, co w każdej kobiecie jest najpiękniejsze. Za nic w świecie nie chce robić nic innego, bo kocha to co robi. Przekonuje się o tym codziennie – wystarczy jeden szczery uśmiech na twarzy zadowolonej klientki.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => true,
                    ],
                    'experience'  => 2,
                ],
                [
                    'id_stylist' => 5,
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
                [
                    'id_stylist' => 19,
                    'title'      => 'Tetiana',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Pasją Tetiany jest fryzjerstwo, a zwłaszcza fryzury ślubne i okazjonalne. Ukończyła technikum fryzjerskie we Wrocławiu. W każdą fryzurę stara się wkładać maksimum swoich umiejętności. Najważniejsze dla niej jest zadowolenie klientek.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => false,
                    ],
                    'experience'  => 7,
                ],
                [
                    'id_stylist' => 20,
                    'title'      => 'Aleksandra',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Aleksandra jest fryzjerem/stylistą z doświadczenia i pasji. Kocha to co robi i zawsze podejmuje się rzeczy “niemożliwych” do zrobienia. Miła, zaangażowana, pełna pasji i pomysłów.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => false,
                    ],
                    'experience'  => 5,
                ],
                [
                    'id_stylist' => 21,
                    'title'      => 'Diana',
                    'url'        => 'DO UZ',
                    'img'        => 'DO UZ',
                    'text'       => 'Diana zajmuje się fryzjerstwem od 6 lat. Fryzjerstwo jest jej pasją, dlatego wkłada w to mnóstwo serca. Każdą z klientek traktuje w indywidualny sposób. Jest bardzo komunikatywna. Ma za sobą międzynarodowe konkursy, w których zdobywała I miejsca.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => false,
                    ],
                    'experience'  => 6,
                ],
                [
                    'id_stylist' => 22,
                    'title'      => 'Julia',
                    'url'        => 'DO UZ poznan',
                    'img'        => 'DO UZ',
                    'text'       => 'Absolwentka szkoły Beauty Art – Make Up Artist and Beauty Stylist. Pasjonatka makijażu, współpracująca przy sesjach zdjęciowych, zleceniach komercyjnych indywidualnych oraz teatralnych. Do każdego makijażu podchodzi z zaangażowaniem czy jest to zlecenie ślubne czy biznesowe. Artystyczne wyzwania oraz charakteryzację są dla niej zawsze miłym wyzwaniem.',
                    'position'   => [
                        'hair_stylist' => true,
                        'makeup_stylist' => false,
                    ],
                    'experience'  => 10,
                ],
        ];

        $response['stylistList'] = $stylistList;
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();


