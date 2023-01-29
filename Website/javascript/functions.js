//Imports

import { variables } from "./variables.js";

//Exported class Functions

class Functions{

    //Start all neccesary functions
    StartUp() {
        this.CheckSucces();
        this.StartLoad();
        this.CheckPage();
    }

    //Start loading
    StartLoad() {
        console.log('Page loading started..');

        if (variables.loadscreen == true) {
            document.getElementById('loadscreen').style.opacity = 1; //Show loadscreen
            document.getElementById('progress').style.width = "100%"; //Animate progress bar
            setTimeout(this.loaded,3000); //this.loaded in 3 seconds
        }
        else{
            this.ChangeZIndex();
            console.log('Page loaded!');
            this.loaded();
        }
    }
    
    //Reports that everything loaded correctly to console
    CheckSucces() {
        console.log('main.js succesfully loaded!'); //Only works if main.js loaded
        console.log('functions.js succesfully imported!') //Only works if functions.js succesfully imported
        console.log(variables.succes); //Only works if variables.js succesfully imported
    }

    //Loading done
    loaded() {
        const r = document.querySelector(':root');
        document.getElementById('loadscreen').style.top = "-300vh"; 
        document.getElementById('loadbar').style.opacity = 0;
        document.getElementById('dot1').style.opacity = 0;
        document.getElementById('dot2').style.opacity = 0;
        document.getElementById('dot3').style.opacity = 0;
        console.log('Page loaded!');
        setTimeout(this.ChangeZIndex,1000);
        if (window.location.href.includes("information.html")) {
            r.style.setProperty("--canvtop","20%");
            r.style.setProperty("--canvop","1");
            document.getElementById('pageback').style.opacity = "1";
        }
        console.log('done')
        
    }

    //Changes layering of loadscreen to behind visible elements
    ChangeZIndex() {
        document.getElementById('loadscreen').style.zIndex = -69;
    }

    //Check dark / light mode to change to appropriate colors
    CheckTheme() {
        const r = document.querySelector(':root');

        if (localStorage.getItem("theme") == "dark") {
            r.style.setProperty('--sixtypercgrad','#393348')
            r.style.setProperty('--sixtyperc', '#1f182e');
            r.style.setProperty('--thirtyperc', '#fb95ff');
            r.style.setProperty('--tenperc', '#FFFFFF');
            r.style.setProperty('--logo',"url('../img/logo.png')");
            r.style.setProperty('--tickets',"url('../img/ticket.png')");
            r.style.setProperty('--themecolor',"#FFFFFF");
            document.getElementById('t-overlay').style.height = "95%";
            document.getElementById('t-overlay').style.width = "95%";
        }

        else if (localStorage.getItem("theme") == "light") {
            r.style.setProperty('--sixtypercgrad','#ffffff')
            r.style.setProperty('--sixtyperc', '#FFFFFF');
            r.style.setProperty('--thirtyperc', '#fb95ff');
            r.style.setProperty('--tenperc', '#666666');
            r.style.setProperty('--logo',"url('../img/logodark.png')");
            r.style.setProperty('--tickets',"url('../img/ticketdark.png')");
            r.style.setProperty('--themecolor',"#ffe99a");
            document.getElementById('t-overlay').style.height = "0%";
            document.getElementById('t-overlay').style.width = "0%";
        }
    }
    
    //Only works first time visit
    FirstTheme(){
        localStorage.setItem("theme", "dark");
    }

    //Change the theme to dark or light mode
    ChangeTheme() {
        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        } else if (localStorage.getItem("theme") == "light") {
            localStorage.setItem("theme", "dark");
        } else{
            localStorage.setItem("theme", "dark");
        }
    }

    //Switch to different page
    SwitchPage(page) {
        if (variables.loadscreen == true) {
            document.getElementById('loadscreen').style.zIndex = 69420;
            document.getElementById('loadscreen').style.top = 0;
            document.getElementById('loadscreen').style.opacity = 1;
        }

        setTimeout(this.GoToOtherPage(page),1000);
    }
    
    //Checks page location
    CheckPage() {
        console.log('checked');
        if (window.location.href.includes("home.html")) {
            document.getElementById('home-b-line').style.width = "80%";
            if (localStorage.getItem("language") == "dutch") {
                document.getElementById('title').innerHTML = "Home";
            } else{
                document.getElementById('title').innerHTML = "Home";
            }
        } else if (window.location.href.includes("information.html")) {
            document.getElementById('info-b-line').style.width = "80%";
            if (localStorage.getItem("language") == "dutch") {
                document.getElementById('title').innerHTML = "Informatie";
            } else{
                document.getElementById('title').innerHTML = "Information";
            } 
        } else if (window.location.href.includes("history.html")) {
            document.getElementById('history-b-line').style.width = "80%";
            if (localStorage.getItem("language") == "dutch") {
                document.getElementById('title').innerHTML = "Geschiedenis";
            } else{
                document.getElementById('title').innerHTML = "History";
            }  
        } else if (window.location.href.includes("highlights.html")) {
            document.getElementById('highlights-b-line').style.width = "80%";
            if (localStorage.getItem("language") == "dutch") {
                document.getElementById('title').innerHTML = "Highlights";
            } else{
                document.getElementById('title').innerHTML = "Highlights";
            } 
        } else if (window.location.href.includes("game.html")) {
            document.getElementById('game-b-line').style.width = "80%";
            if (localStorage.getItem("language") == "dutch") {
                document.getElementById('title').innerHTML = "Spel";
            } else{
                document.getElementById('title').innerHTML = "Game";
            } 
        }
    }

    //Changes window location (link)
    GoToOtherPage(page) {
        console.log(page);
        if (page == "home") {
            window.location.replace("home.html");
        }
        else if (page == "info") {
            window.location.replace("information.html");
        }
        else if (page == "history") {
            window.location.replace("history.html");
        }
        else if (page == "highlights") {
            window.location.replace("highlights.html");
        }
        else if (page == "game") {
            window.location.replace("game.html");
        }
    }

    //Collision detection (Check if two elements overlap)
    elementsOverlap(el1,el2) {
        const domRect1 = el1.getBoundingClientRect();
        const domRect2 = el2.getBoundingClientRect();
        const prarea = document.getElementById('PacmanArea');
        if(domRect1.top > domRect2.bottom || domRect1.right < domRect2.left || domRect1.bottom < domRect2.top || domRect1.left > domRect2.right == true) {
            
        }
        else{
            if (el2.id == "pacman") {
                if (window.getComputedStyle(document.getElementById('pacman')).getPropertyValue("opacity") == 1) {
                    prarea.removeChild(el1);
                    prarea.appendChild(el1);
                    el1.style.animation = "pacmandotanimation 5s 0s ease-in";
                }
            }
        }
    }

    //Detect if an element is currently visible to the client
    IsInViewport(el1) {
        var bounding = el1.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

            if (el1.id == 'BottomSecTopBar') {
                el1.style.width = "80%";
                document.getElementById('PacmanArea').style.bottom = "30%";
                document.getElementById('PacmanArea').style.opacity = 1;
            }

            else if (el1.id == "opening-times") {
                document.getElementById('opening-times').style.opacity = 1;
                document.getElementById('opening-times').style.bottom = 0;
                
            }
            
            else{
                console.log('not found');
            }
        } else{
            if (el1.id == 'BottomSecTopBar') {
                el1.style.width = "0%";
                document.getElementById('PacmanArea').style.bottom = "0%";
                document.getElementById('PacmanArea').style.opacity = 0;
            }
        }
    }

    //Check the language variable to change the websites language if needed
    CheckLanguage() {
        if (localStorage.getItem("language") == "dutch") {
            document.getElementById('dutch-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('english-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Informatie";
            document.getElementById('history-t').innerHTML = "Geschiedenis";
            document.getElementById('game-t').innerHTML = "Spel";
            if (window.location.href.includes("home.html")) {
                document.getElementById('opening-times-title').innerHTML = "Openingstijden:";
                document.getElementById('monday').innerHTML = "Maandag: Gesloten";
                document.getElementById('tuesday').innerHTML = "Dinsdag: Gesloten";
                document.getElementById('wednesday').innerHTML = "Woensdag: 10.00 - 18.00";
                document.getElementById('thursday').innerHTML = "Donderdag: 10.00 - 18.00";
                document.getElementById('friday').innerHTML = "Vrijdag: 10.00 - 21.00";
                document.getElementById('saturday').innerHTML = "Zaterdag: 10.00 - 18.00";
                document.getElementById('sunday').innerHTML = "Zondag: 12.00 - 18.00";
                document.getElementById('hometitle').innerHTML = "Ons museum!"
            }
            else if (window.location.href.includes("information.html")) {
                document.getElementById('itbt-1').innerHTML = "Zodra je binnenkomt in het museum, word je overgoten door alles wat de game cultuur zo mooi en indrukwekkend maakt. <br> Volg onze tijdlijn door de sfeerkamers en ontdek de geschiedenis van videogames aan de hand van de gamechangers, hoogtepunten en belangrijke momenten in techniek, artwork en cultuur binnen de game industrie. <br> <br> <br>"
                document.getElementById('itbt-2').innerHTML = "Toekomst en educatie gaan hand in hand, daarom vind je in het Lab de toekomst van games en leer je hoe jij deel uitmaakt van die toekomst. <br> Laat je verrassen door de educatieve projecten van het museum op scholen en bij workshops waar de nieuwste techniek wordt uitgelegd en aangeleerd. <br>  Het Lab is een dynamische ruimte. Van het bewonderen van game art tot het reizen door nieuwe werelden. <br> In het Lab is altijd wel wat nieuws te beleven: de ene keer leer je er van alles over de geschiedenis van gamen tijdens een lezing en de andere keer verwelkomen wij je er tijdens een toernooi of een meet-up. <br> Ervaar de toekomst van gaming, of geef deze zelf vorm in het Lab! <br> <br> <br>"
                document.getElementById('itbt-3').innerHTML = "Welkom in onze Barcade, waar moderne horeca en retro arcadekasten samenkomen in een gezellige omgeving. <br> Hier kun je even bijtanken na uren avonturieren, uitdagingen en de wereld redden. <br> Naast de bekende halal hotdogs en tosti’s bieden we nu ook gezonde broodjes. <br> De Barcade is ook open voor publiek dat geen bezoek aan het museum wil brengen, dus neem je judo-docent, je buurman of je oma mee voor een lekkere kop koffie! <br> <br> <br>"
                document.getElementById('atmosphere-title').innerHTML = "De sfeerkamers"
                document.getElementById('lab-title').innerHTML = "Het lab"
                document.getElementById('barcade-title').innerHTML = "De barcade"
            }
            else if (window.location.href.includes("history.html")) {
                document.getElementById('itbt-4').innerHTML = "Een garagebox in Den Haag is de plek waar het avontuur in 2008  begon, met twee vrienden Hasan Tasdemir en Pascal Rappailles. <br> De garagebox werd al snel te klein waarna ze uitweken naar een loods op een industrieterrein. <br> Helaas was de loods niet verwarmd en moest midden in de winter alles worden overgebracht naar een leegstaand Ministerie van Landbouw. <br> Toen ook dit pand leeggeruimd moest worden, werd de toenmalige collectie van 10 arcade videogames met wat reserveonderdelen opgeslagen in een oude showroom voor klassieke auto’s. <br> Omdat daar geen ruimte was om de kasten te renoveren of te bespelen werd uitgekeken naar passende ruimte. <br> Die werd in 2011 gevonden aan de Cobaltstraat in Zoetermeer. <br> Daar besloot Hasan om met 4 vrienden de locatie te huren en kon het avontuur groeien tot een eigen ontmoetingsplek om hun hobby uit te oefenen en lekker te ontspannen met een game. <br> <br> <br>"
                document.getElementById('itbt-5').innerHTML = "Al snel waren er meer mensen die mee wilden doen, waardoor zowel de locatie als de hobbymatige aanpak niet langer toereikend waren, naast ieders dagelijks werk. <br> Het initiatief dreigde aan haar succes ten onder te gaan. Er werd daarom door de vrienden besloten dat een professionele aanpak noodzakelijk was en het niet langer hobbymatig kon worden voortgezet. <br> In goed overleg werd besloten dat een van de vrienden, Hasan Tasdemir, zou proberen om het concept uit te bouwen tot een bedrijf. <br> Waarbij de anderen hem in hun vrije tijd met raad en daad zouden ondersteunen. <br> Hasan besloot in 2014 de Cobaltstraat te verlaten en te verhuizen naar de Bleiswijkseweg. <br> Omdat de inkomsten nog steeds marginaal waren konden alleen antikraakpanden worden gehuurd, waardoor er nog steeds vaak moest worden verhuisd. <br> Van de Stephensonstraat naar de Edisonstraat waar mooie events onder de naam Retro Planet werden georganiseerd voor de community. <br> Ook de collectie werd steeds verder uitgebreid. <br> Terwijl de interesse in retrogaming vanuit familie en vrienden groter en groter werd. <br> Om die reden nam Hasan in 2015 de belangrijke stap om zijn inmiddels omvangrijke collectie onder te brengen in een professioneel bedrijf met de naam Playworks BV. <br> <br> <br>"
                document.getElementById('itbt-6').innerHTML = "In 2016 kwam Hasan in contact met Jan Kragt, citymarketeer van de gemeente Zoetermeer, die diep onder de indruk van de collectie, het idee opperde om er een museum van te maken en daarvoor een stichting op te richten. <br> Ter plekke bedachten Hasan en Jan de naam en het Nationaal Videogamemuseum werd geboren. <br> Samen met een aantal belangrijke spelers uit de Nederlandse game community werd vervolgens stichting Nationaal Videogame Museum in het leven geroepen. <br> Het gemeentebestuur was enthousiast over het idee en besloot het museum financieel te ondersteunen. <br> Hiermee kon een verwarmde opslag worden gehuurd waar de volledige collectie kon worden ondergebracht en deels worden tentoongesteld. <br> Begin 2017 werd in nauwe samenwerking met de gemeente een echte museumlocatie gevonden: het voormalige V&D-pand in het stadshart van Zoetermeer. <br> <br> <br>"
                document.getElementById('itbt-7').innerHTML = "Vanaf mei 2017 werd er door een grote groep vrijwilligers en fans keihard gewerkt om de pilot van het museum ingericht te krijgen zodat het op 1 december 2017 ready to play was! <br> De enorme toestroom van enthousiaste bezoekers en de vele positieve reacties op ons museum spreken voor zich. <br> Het Nationaal Videogamemuseum is inmiddels een groot succes, mede dankzij de tomeloze inzet van al onze medewerkers en vrijwilligers. <br> <br> <br>"
                document.getElementById('itbt-8').innerHTML = "Inmiddels zijn we druk bezig met het vergroten van het museum, het verdiepen van de beleving en het versterken van de museale en educatieve waarde van ons mooie museum. <br> Wij doen er alles aan om het museum verder te professionaliseren en klaar te maken voor een volgend ‘level’ op een vaste en definitieve locatie. <br> En onze ambitie gaat nog veel verder, want we willen het Nationaal Videogame Museum laten uitgroeien tot een totaalconcept, met ondermeer: <br>•	een Nationaal Game Kenniscentrum; <br>•	een Nationaal Videogame archief; <br>•	een eSports arena; <br>•	een Hacker-/makerspace voor jong en oud; <br>•	een gamebeurs en –evenementenlocatie <br> <br> <br>"
                document.getElementById('history-title').innerHTML = "Onze geschiedenis"
            }
        }
        else if (localStorage.getItem("language") == "english") {
            document.getElementById('english-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('dutch-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Information";
            document.getElementById('history-t').innerHTML = "History";
            document.getElementById('game-t').innerHTML = "Game";
            if (window.location.href.includes("home.html")) {
                document.getElementById('opening-times-title').innerHTML = "Opening times:";
                document.getElementById('monday').innerHTML = "Monday: Closed";
                document.getElementById('tuesday').innerHTML = "Tuesday: Closed";
                document.getElementById('wednesday').innerHTML = "Wednesday: 10.00 - 18.00";
                document.getElementById('thursday').innerHTML = "Thursday: 10.00 - 18.00";
                document.getElementById('friday').innerHTML = "Friday: 10.00 - 21.00";
                document.getElementById('saturday').innerHTML = "Saturday: 10.00 - 18.00";
                document.getElementById('sunday').innerHTML = "Sunday: 12.00 - 18.00";
                document.getElementById('hometitle').innerHTML = "Our museum!"
            }
            else if (window.location.href.includes("information.html")) {
                document.getElementById('itbt-1').innerHTML = "As soon as you walk into the museum, you will be blown away by everything that makes game culture so beautiful and impressive. <br>Follow our timeline though the atmosphere rooms and discover the history of video games through the game changers, <br>highlights and important moments in technology, artwork and culture within the game industry. <br>the classics, meet icons and discover the lost treasures of videogames. <br>The museum has around 231 game computers, home computers and arcade cabinets ready to be played, and 327 unique play areas. <br>That makes us the museum with the largest arcade in all of Europe! <br> <br> <br>"
                document.getElementById('itbt-2').innerHTML = "Future and education go hand in hand, that's why in the Lab you will find the future of games and learn how you are part of that future. <br>Surprise yourself by the museum's educational projects in schools and at workshops where the latest technology is explained and taught. <br>The lab is a dynamic space. Go from admiring the game art to traveling through new worlds. There’s always something new to learn in the lab: the one time you’re learning <br>everything about the history of gaming in a reading and the other time you’re welcomed by a gaming match or a meet-up. <br>Experience the future of gaming! <br> <br> <br>"
                document.getElementById('itbt-3').innerHTML = "Welcome to our barcade, where the modern catering industry meets the retro arcade in a cozy environment. Here you can refuel after hours of adventures,  <br>challenges and saving the world. Next to our famous halal hotdogs and grilled sandwiches, we now also offer healthy sandwiches. <br>The barcade is now also open for the general public that’s not visiting the museum itself. So bring your judo-teacher, your neighbour or your grandma for a nice cup of coffee. <br> <br> <br>"
                document.getElementById('atmosphere-title').innerHTML = "The atmosphere rooms"
                document.getElementById('lab-title').innerHTML = "The lab"
                document.getElementById('barcade-title').innerHTML = "The barcade"
            }
            else if (window.location.href.includes("history.html")) {
                document.getElementById('itbt-4').innerHTML = "A garage box in Den Haag is the place where the adventure started in 2008, with two friends, Hasan Tasdemir and Pascal Rappailles.  <br>The garage quickly became too small, after which they moved to a warehouse on an industrial estate. Unfortunately, the warehouse was not heated and everything had <br>to be transferred to an empty Ministry of Agriculture in the middle of winter. When this building also had to be cleared out, the then collection of 10 arcade video games was <br>stored with some spare parts in an old showroom for classic cars. Because there was no room to renovate or play with the cabinets, suitable space was looked for. <br>It was found in 2011 on the Cobaltstraat in Zoetermeer. There Hasan decided to rent the location with 4 friends and the adventure could grow into their own meeting place to <br>practice their hobby and relax with a game. <br> <br> <br>"
                document.getElementById('itbt-5').innerHTML = "Soon there were more people who wanted to participate, so that both the location and the hobby approach were no longer sufficient, in addition <br>to everyone's daily work. The initiative was in danger of collapsing because of its success. It was therefore decided by the friends that a professional approach was necessary, <br>and it could no longer be continued as a hobby. In good consultation it was decided that one of the friends, Hasan Tasdemir, would try to develop the concept into a company. <br>The others would support him with advice and deed in their free time.  <br>Hasan decided to leave Cobaltstraat in 2014 and move to Bleiswijkseweg. Because the income was still marginal, only anti-squat buildings could be rented, which meant that <br>relocations were still frequent. From Stephensonstraat to Edisonstraat where great events under the name Retro Planet were organized for the community. The collection was also <br>expanded further and further. While the interest in retrogaming from family and friends grew and grew. <br>That is why Hasan took the important step in 2015 to house his now extensive collection in a professional company called Playworks BV. <br> <br> <br>"
                document.getElementById('itbt-6').innerHTML = "In 2016 Hasan came in contact with Jan Kragt, City marketer of the municipality of Zoetermeer, who was deeply impressed by the collection, suggested the idea of turning it into a <br>museum and setting up a foundation for it. Hasan and Jan came up with the name on the spot and the National Video Game Museum was born. Together with a number of <br>important players from the Dutch game community, the National Videogame Museum Foundation was subsequently established. <br>The municipal council was enthusiastic about the idea and decided to support the museum financially. This made it possible to rent a heated storage facility where the entire collection <br>could be housed and some of it exhibited. <br>At the beginning of 2017, a real museum location was found in close collaboration with the municipality: the former V&D building in the city center of Zoetermeer. <br> <br> <br>"
                document.getElementById('itbt-7').innerHTML = "From May 2017, a large group of volunteers and fans worked hard to get the pilot of the museum set up so that it was ready to play on December 1, 2017! The enormous influx <br>of enthusiastic visitors and the many positive reactions to our museum speak for themselves. <br>The National Video Game Museum has now become a great success, thanks in part to the tireless efforts of all our employees and volunteers. <br> <br> <br>"
                document.getElementById('itbt-8').innerHTML = "We are now busy enlarging the museum, deepening the experience and strengthening the museological and educational value of our beautiful museum. <br>We are doing everything we can to further professionalize the museum and prepare it for the next 'level' at a permanent and definitive location. <br>And our ambition goes much further, because we want the National Videogame Museum to grow into a total concept, including: <br>•	a National Game Knowledge Centre; <br>•	a National Videogame Archive; <br>•	an eSports arena; <br>•	a Hacker/makerspace for young and old; <br>•	a game fair and event location <br> <br> <br>"
                document.getElementById('history-title').innerHTML = "Our history"
            }
        }
        else{
            document.getElementById('english-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('dutch-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Information";
            document.getElementById('history-t').innerHTML = "History";
            document.getElementById('game-t').innerHTML = "Game";
            if (window.location.href.includes("home.html")) {
                document.getElementById('opening-times-title').innerHTML = "Opening times:";
                document.getElementById('monday').innerHTML = "Monday: Closed";
                document.getElementById('tuesday').innerHTML = "Tuesday: Closed";
                document.getElementById('wednesday').innerHTML = "Wednesday: 10.00 - 18.00";
                document.getElementById('thursday').innerHTML = "Thursday: 10.00 - 18.00";
                document.getElementById('friday').innerHTML = "Friday: 10.00 - 21.00";
                document.getElementById('saturday').innerHTML = "Saturday: 10.00 - 18.00";
                document.getElementById('sunday').innerHTML = "Sunday: 12.00 - 18.00";
                document.getElementById('hometitle').innerHTML = "Our museum!"
            }
            else if (window.location.href.includes("information.html")) {
                document.getElementById('itbt-1').innerHTML = "As soon as you walk into the museum, you will be blown away by everything that makes game culture so beautiful and impressive. <br>Follow our timeline though the atmosphere rooms and discover the history of video games through the game changers, <br>highlights and important moments in technology, artwork and culture within the game industry. <br>the classics, meet icons and discover the lost treasures of videogames. <br>The museum has around 231 game computers, home computers and arcade cabinets ready to be played, and 327 unique play areas. <br>That makes us the museum with the largest arcade in all of Europe! <br> <br> <br>"
                document.getElementById('itbt-2').innerHTML = "Future and education go hand in hand, that's why in the Lab you will find the future of games and learn how you are part of that future. <br>Surprise yourself by the museum's educational projects in schools and at workshops where the latest technology is explained and taught. <br>The lab is a dynamic space. Go from admiring the game art to traveling through new worlds. There’s always something new to learn in the lab: the one time you’re learning <br>everything about the history of gaming in a reading and the other time you’re welcomed by a gaming match or a meet-up. <br>Experience the future of gaming! <br> <br> <br>"
                document.getElementById('itbt-3').innerHTML = "Welcome to our barcade, where the modern catering industry meets the retro arcade in a cozy environment. Here you can refuel after hours of adventures,  <br>challenges and saving the world. Next to our famous halal hotdogs and grilled sandwiches, we now also offer healthy sandwiches. <br>The barcade is now also open for the general public that’s not visiting the museum itself. So bring your judo-teacher, your neighbour or your grandma for a nice cup of coffee. <br> <br> <br>"
                document.getElementById('atmosphere-title').innerHTML = "The atmosphere rooms"
                document.getElementById('lab-title').innerHTML = "The lab"
                document.getElementById('barcade-title').innerHTML = "The barcade"
            }
            else if (window.location.href.includes("history.html")) {
                document.getElementById('itbt-4').innerHTML = "A garage box in Den Haag is the place where the adventure started in 2008, with two friends, Hasan Tasdemir and Pascal Rappailles.  <br>The garage quickly became too small, after which they moved to a warehouse on an industrial estate. Unfortunately, the warehouse was not heated and everything had <br>to be transferred to an empty Ministry of Agriculture in the middle of winter. When this building also had to be cleared out, the then collection of 10 arcade video games was <br>stored with some spare parts in an old showroom for classic cars. Because there was no room to renovate or play with the cabinets, suitable space was looked for. <br>It was found in 2011 on the Cobaltstraat in Zoetermeer. There Hasan decided to rent the location with 4 friends and the adventure could grow into their own meeting place to <br>practice their hobby and relax with a game. <br> <br> <br>"
                document.getElementById('itbt-5').innerHTML = "Soon there were more people who wanted to participate, so that both the location and the hobby approach were no longer sufficient, in addition <br>to everyone's daily work. The initiative was in danger of collapsing because of its success. It was therefore decided by the friends that a professional approach was necessary, <br>and it could no longer be continued as a hobby. In good consultation it was decided that one of the friends, Hasan Tasdemir, would try to develop the concept into a company. <br>The others would support him with advice and deed in their free time.  <br>Hasan decided to leave Cobaltstraat in 2014 and move to Bleiswijkseweg. Because the income was still marginal, only anti-squat buildings could be rented, which meant that <br>relocations were still frequent. From Stephensonstraat to Edisonstraat where great events under the name Retro Planet were organized for the community. The collection was also <br>expanded further and further. While the interest in retrogaming from family and friends grew and grew. <br>That is why Hasan took the important step in 2015 to house his now extensive collection in a professional company called Playworks BV. <br> <br> <br>"
                document.getElementById('itbt-6').innerHTML = "In 2016 Hasan came in contact with Jan Kragt, City marketer of the municipality of Zoetermeer, who was deeply impressed by the collection, suggested the idea of turning it into a <br>museum and setting up a foundation for it. Hasan and Jan came up with the name on the spot and the National Video Game Museum was born. Together with a number of <br>important players from the Dutch game community, the National Videogame Museum Foundation was subsequently established. <br>The municipal council was enthusiastic about the idea and decided to support the museum financially. This made it possible to rent a heated storage facility where the entire collection <br>could be housed and some of it exhibited. <br>At the beginning of 2017, a real museum location was found in close collaboration with the municipality: the former V&D building in the city center of Zoetermeer. <br> <br> <br>"
                document.getElementById('itbt-7').innerHTML = "From May 2017, a large group of volunteers and fans worked hard to get the pilot of the museum set up so that it was ready to play on December 1, 2017! The enormous influx <br>of enthusiastic visitors and the many positive reactions to our museum speak for themselves. <br>The National Video Game Museum has now become a great success, thanks in part to the tireless efforts of all our employees and volunteers. <br> <br> <br>"
                document.getElementById('itbt-8').innerHTML = "We are now busy enlarging the museum, deepening the experience and strengthening the museological and educational value of our beautiful museum. <br>We are doing everything we can to further professionalize the museum and prepare it for the next 'level' at a permanent and definitive location. <br>And our ambition goes much further, because we want the National Videogame Museum to grow into a total concept, including: <br>•	a National Game Knowledge Centre; <br>•	a National Videogame Archive; <br>•	an eSports arena; <br>•	a Hacker/makerspace for young and old; <br>•	a game fair and event location <br> <br> <br>"
                document.getElementById('history-title').innerHTML = "Our history"
            }
        }
    }

    //Changes language on click
    ChangeLanguage(language) {
        localStorage.setItem("language", language);
    }

    //Changes ghost when out of screen
    ChangeGhost() {
        let elem = document.getElementById('ghost');
        if (window.getComputedStyle(elem).getPropertyValue("left") == "0px") {
            var n = Math.floor(Math.random() * 4 + 1);
            if (n == 1) {
                document.getElementById('ghost').style.backgroundImage = "url('../img/Blinky.gif')";
            }

            else if (n == 2) {
                document.getElementById('ghost').style.backgroundImage = "url('../img/Pinky.gif')";
            }

            else if (n == 3) {
                document.getElementById('ghost').style.backgroundImage = "url('../img/Clyde.gif')";
            }

            else if (n == 4) {
                document.getElementById('ghost').style.backgroundImage = "url('../img/Inky.gif')";
            }
        }
    }

    //Huge bundle of things to do during SetInterval in main.js (set to every 10 ms)
    Interval() {
        functions.ChangeGhost();
        functions.CheckTheme();
        functions.elementsOverlap(document.getElementById('d1'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d2'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d3'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d4'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d5'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d6'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d7'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d8'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d9'),document.getElementById('pacman'));
        functions.elementsOverlap(document.getElementById('d10'),document.getElementById('pacman'));
        functions.IsInViewport(document.getElementById('BottomSecTopBar'));
        functions.CheckLanguage();
    }
}

//Make class Functions public
export let functions = new Functions;