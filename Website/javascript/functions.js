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
            r.style.setProperty('--themecolor',"#FFFFFF");
            r.style.setProperty('--searchbar','#FFFFFF');
            document.getElementById('t-overlay').style.height = "95%";
            document.getElementById('t-overlay').style.width = "95%";
        }

        else if (localStorage.getItem("theme") == "light") {
            r.style.setProperty('--sixtypercgrad','#ffffff')
            r.style.setProperty('--sixtyperc', '#FFFFFF');
            r.style.setProperty('--thirtyperc', '#fb95ff');
            r.style.setProperty('--tenperc', '#666666');
            r.style.setProperty('--logo',"url('../img/logodark.png')");
            r.style.setProperty('--themecolor',"#ffe99a");
            r.style.setProperty('--searchbar','#fb95ff');
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
            document.getElementById('search-input').placeholder = "Zoeken..";
            document.getElementById('dutch-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('english-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Informatie";
        }
        else if (localStorage.getItem("language") == "english") {
            document.getElementById('search-input').placeholder = "Search..";
            document.getElementById('english-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('dutch-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Information";
        }
        else{
            document.getElementById('search-input').placeholder = "Search..";
            document.getElementById('dutch-button').style.boxShadow = "0px 0px 10px var(--thirtyperc)";
            document.getElementById('english-button').style.boxShadow = "";
            document.getElementById('home-t').innerHTML = "Home";
            document.getElementById('information-t').innerHTML = "Information";
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

    //Checks scrollpos to adjust topbar accordingly
    CheckScrollPos() {
        let scrollpos = window.scrollY;
        if (scrollpos == 0) {
            document.getElementById('topbar').style.height = "9%";
        } else{
            document.getElementById('topbar').style.height = "8.5%";
        }
    }

    //Searchbar input check
    checkInputFocus() {
        //Variables
        var s_input = document.getElementById("search-input");
        var s_icon = document.getElementById("s-icon");
        var s_bar = document.getElementById("s-bar");
    
        if (document.activeElement == s_input){ //If input is focus
          s_bar.style.width = "20%";
          //s_bar.style.filter = "drop-shadow(0px -3px 5px #FFFFFF) drop-shadow(0px 3px 5px #FFFFFF)";
          //s_bar.style.top = "-10%";
    
          if (s_input && s_input.value) { //If it exists and if it has letter(s) in it
            s_icon.style.opacity = 0; //Invisible
          }
    
          else {
            s_icon.style.opacity = 1; //Visible
          }
          
        }
    
        else {
          //s_bar.style.filter = "drop-shadow(0px 0px 0px";
          s_bar.style.width = "12.5%";
          //s_bar.style.top = "0";  
          
          if (s_input && s_input.value) { //If it exists and if it has letter(s) in it
            s_icon.style.opacity = 0; //Invisible
          }
          else{
            s_icon.style.opacity = 1; //Visible
          }
    
        }
      }

    //Huge bundle of things to do during SetInterval in main.js (set to every 10 ms)
    Interval() {
        functions.checkInputFocus();
        functions.ChangeGhost();
        functions.CheckScrollPos();
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